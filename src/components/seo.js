import React from 'react';
import Head from 'next/head';
import LogoDark from 'assets/logo.svg';
export default function SEO({
  description = 'Go Nexter english application',
  author = 'Go Nexter',
  meta,
  title = 'GoNexter',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website"/>
      <meta property="og:type" content="Nexter"/>
      <meta property="og:description"   content="English Social Nextwork" />
      <meta property="og:image"  content={LogoDark}/>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
