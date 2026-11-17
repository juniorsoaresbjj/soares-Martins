import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  schema?: object | object[];
  canonical?: string;
  keywords?: string;
}

const hasOwnLegalServiceEntity = (schema?: object | object[]): boolean => {
  if (!schema || typeof schema !== 'object') return false;
  if (Array.isArray(schema)) {
    return schema.some((item) => hasOwnLegalServiceEntity(item));
  }
  const record = schema as Record<string, unknown>;
  if (
    record['@type'] === 'LegalService' &&
    Boolean(record['address'] || record['name'] || record['email'] || record['telephone'])
  ) {
    return true;
  }
  return Object.values(record).some((val) => typeof val === 'object' && val !== null && hasOwnLegalServiceEntity(val as object));
};

const SEO: React.FC<SeoProps> = ({ title, description, type = 'website', image, schema, canonical, keywords }) => {
  const { pathname } = useLocation();
  
  const siteUrl = 'https://soaresmartinsadv.com';
  const defaultImage = `${siteUrl}/favicon.svg`; // Fallback image
  const ogImage = image || defaultImage;
  
  // Standardize canonical URLs to include trailing slashes (except for home)
  const canonicalUrl = canonical || (pathname === '/' ? siteUrl : `${siteUrl}${pathname.endsWith('/') ? pathname : `${pathname}/`}`);
  const fullTitle = title.toLowerCase().includes('soares martins') ? title : `${title} | Soares Martins Advogados`;
  const definesLegalService = hasOwnLegalServiceEntity(schema);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const titleEls = Array.from(document.head.querySelectorAll('title'));
    if (titleEls.length > 1) {
      const preferredTitle =
        titleEls.find((el) => el.hasAttribute('data-rh')) ||
        titleEls.find((el) => el.textContent === fullTitle) ||
        titleEls[titleEls.length - 1];
      titleEls.forEach((el) => {
        if (el !== preferredTitle) {
          el.remove();
        }
      });
    }
    if (document.title !== fullTitle) {
      document.title = fullTitle;
    }

    const removedStaticSchemas: { node: HTMLScriptElement; nextSibling: ChildNode | null }[] = [];
    if (definesLegalService) {
      const headScripts = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      ) as HTMLScriptElement[];
      headScripts.forEach((script) => {
        if (
          !script.hasAttribute('data-rh') &&
          script.textContent?.includes('https://soaresmartinsadv.com/#legalservice') &&
          script.textContent?.includes('LegalService')
        ) {
          removedStaticSchemas.push({ node: script, nextSibling: script.nextSibling });
          script.remove();
        }
      });
    }

    return () => {
      removedStaticSchemas.forEach(({ node, nextSibling }) => {
        if (!document.head.contains(node)) {
          document.head.insertBefore(node, nextSibling);
        }
      });
    };
  }, [fullTitle, definesLegalService]);

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pt-BR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Soares Martins Advogados" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
