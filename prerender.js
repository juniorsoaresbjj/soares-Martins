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
  '/historia/',
  '/servicos/',
  '/equipe/',
  '/contato/',
  '/blog/',
  // Services
  '/direito-condominial/',
  '/assessoria-juridica-para-sindicos/',
  '/cobranca-condominial/',
  '/assembleias-convencao-regimento/',
  '/direito-patrimonial-sucessorio/',
  '/direito-imobiliario/',
  '/compliance-condominial-penal/',
  // Blog Posts (Portuguese)
  '/blog/lgpd-condominios-portaria-cameras/',
  '/blog/stj-regras-animais-condominios-o-que-mudou/',
  '/blog/inadimplencia-recorde-recuperacao-caixa/',
  '/blog/gestao-condominial-previsao-orcamentaria/',
  '/blog/tecnologia-condominios-portaria-remota/',
  '/blog/direito-imobiliario-due-diligence-compra/',
  '/blog/convivencia-condominios-barulho-areas-comuns/',
  '/blog/cobranca-judicial-inadimplente-condominio-rj/',
  '/blog/sindico-morador-barulhento/',
  '/blog/lgpd-condominios-guia-sindico/',
  // Blog Posts (English)
  '/blog/lgpd-condominiums-concierge-cameras/',
  '/blog/stj-rules-animals-condominiums-what-changed/',
  '/blog/delinquency-recovery-legal-strategies/',
  '/blog/condominium-management-budget-forecast/',
  '/blog/technology-condominiums-remote-concierge/',
  '/blog/real-estate-law-due-diligence-property-purchase/',
  '/blog/coexistence-condominiums-noise-common-areas/',
  // Blog Posts (Spanish)
  '/blog/lgpd-condominios-porteria-camaras/',
  '/blog/stj-reglas-animals-condominios-que-ha-cambiado/',
  '/blog/morosidad-estrategias-recuperacion-caja/',
  '/blog/gestion-condominios-prevision-presupuestaria/',
  '/blog/tecnologia-condominios-porteria-remota/',
  '/blog/derecho-inmobiliario-due-diligence-compra/',
  '/blog/convivencia-condominios-ruido-areas-comunes/'
]

async function start() {
  console.log('--- Starting Pre-rendering ---')
  
  for (const url of routesToPrerender) {
    const { html: appHtml, helmet } = await render(url)

    // Combine helmet data ensuring strings
    const helmetContent = `
      ${helmet.title?.toString() || ''}
      ${helmet.meta?.toString() || ''}
      ${helmet.link?.toString() || ''}
    `.trim();

    // Scrap from body as fallback - only if NOT in helmet
    const headTagsRegex = /<(title|meta|link)[^>]*>(.*?<\/\1>)?/g;
    const bodyTags = appHtml.match(headTagsRegex) || [];
    
    // Deduplicate and process tags
    const processHeadTags = (helmetStr, bodyTagsArray) => {
      const helmetTags = helmetStr.match(/<(title|meta|link|script)[^>]*>(.*?<\/\1>)?/g) || [];
      const seen = new Set();
      const result = [];
      
      const addTag = (tag) => {
        let key;
        if (tag.startsWith('<title>')) {
          key = 'title';
        } else if (tag.includes('name=')) {
          key = 'name:' + tag.match(/name="([^"]*)"/)?.[1]?.toLowerCase();
        } else if (tag.includes('property=')) {
          key = 'property:' + tag.match(/property="([^"]*)"/)?.[1]?.toLowerCase();
        } else if (tag.includes('rel="canonical"')) {
          key = 'canonical';
        } else if (tag.includes('rel=')) {
          key = 'rel:' + tag.match(/rel="([^"]*)"/)?.[1]?.toLowerCase();
        } else {
          key = tag.replace(/\s+/g, ' ').trim();
        }

        if (key && !seen.has(key)) {
          seen.add(key);
          result.push(tag);
          return true;
        }
        return false;
      };

      // Priority 1: Helmet tags
      helmetTags.forEach(addTag);
      
      // Priority 2: Body leaked tags (only if not seen)
      bodyTagsArray.forEach(addTag);

      return result.join('\n    ');
    };
    
    const finalHeadContent = processHeadTags(helmetContent, bodyTags);
    
    // Aggressively remove these from body
    const cleanAppHtml = appHtml.replace(headTagsRegex, '');

    let html = template
      .replace(`<!--app-html-->`, cleanAppHtml)
      .replace(`<script id="seo-head"></script>`, finalHeadContent)

    // Construct file path
    let filePath;
    if (url === '/') {
      filePath = '/index.html'
    } else {
      const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url
      filePath = `${cleanUrl}/index.html`
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
  
  console.log('--- Cleaning up Temporary SSR Build ---')
  try {
    fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
    console.log('✓ Temporary SSR folder removed successfully.')
  } catch (err) {
    console.error('Warning: Failed to clean up temporary SSR build:', err)
  }
}

start().catch((err) => {
  console.error('Pre-rendering failed:', err)
  process.exit(1)
})
