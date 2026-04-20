import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes to pre-render
const routesToPrerender = [
  '/',
  '/historia',
  '/servicos',
  '/equipe',
  '/contato',
  '/blog',
  '/direito-condominial',
  '/assessoria-juridica-para-sindicos',
  '/cobranca-condominial',
  '/assembleias-convencao-regimento'
]

async function start() {
  console.log('--- Starting Pre-rendering ---')
  
  for (const url of routesToPrerender) {
    const { html: appHtml, helmet } = await render(url)

    // Regex to capture leaked meta/title/link tags from body
    const headTagsRegex = /<(title|meta|link)[^>]*>(.*?<\/\1>)?/g;
    const leakedTags = appHtml.match(headTagsRegex) || [];
    
    // Combine helmet object data with any leaked tags found in the body
    const helmetContent = `${helmet.title}${helmet.meta}${helmet.link}${leakedTags.join('')}`;
    
    // Deduplicate tags (unique filtering by the full tag string)
    // We split by closing tags then match openers to ensure we don't break tags
    const dedupeTags = (str) => {
      const tags = str.match(/<(title|meta|link)[^>]*>(.*?<\/\1>)?/g) || [];
      const seen = new Set();
      return tags.filter(tag => {
        // Create a unique key based on tag name and critical attributes (property, name, rel, href)
        const key = tag.replace(/\s+/g, ' ').trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }).join('');
    };
    
    const uniqueTags = dedupeTags(helmetContent);
    
    // Remove leaked tags from the app HTML to ensure they don't stay in the body
    const cleanAppHtml = appHtml.replace(headTagsRegex, '');

    let html = template
      .replace(`<!--app-html-->`, cleanAppHtml)
      .replace(`<script id="seo-head"></script>`, uniqueTags)

    // Construct file path
    let filePath;
    if (url === '/') {
      filePath = '/index.html'
    } else {
      filePath = `${url}/index.html`
    }

    const fullPath = toAbsolute(`dist${filePath}`)
    const dirPath = path.dirname(fullPath)
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }
    
    fs.writeFileSync(fullPath, html)
    console.log(`✓ Generated: ${fullPath}`)
  }

  console.log('--- Pre-rendering Complete ---')
}

start().catch((err) => {
  console.error('Pre-rendering failed:', err)
  process.exit(1)
})
