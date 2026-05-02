
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  type?: string;
}

const SEO: React.FC<SeoProps> = ({ title, description, type = 'website' }) => {
  const { pathname } = useLocation();
  
  const siteUrl = 'https://soaresmartinsadv.com';
  // Standardize canonical URLs to include trailing slashes (except for home)
  const canonicalUrl = pathname === '/' ? siteUrl : `${siteUrl}${pathname.endsWith('/') ? pathname : `${pathname}/`}`;
  const fullTitle = `${title} | Soares Martins Advogados`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Soares Martins Advogados" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
