
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
  const canonicalUrl = `${siteUrl}${pathname.endsWith('/') ? pathname : `${pathname}/`}`;
  const fullTitle = `${title} | Soares Martins Advogados`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Soares Martins Advogados" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
