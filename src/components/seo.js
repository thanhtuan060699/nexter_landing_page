import React from 'react';
import Head from 'next/head';
import LogoDark from 'assets/pnglogo.png';
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
      <meta http-equiv="REFRESH" content="1800"/>
      <meta name="description" content="Find friends to chat and speak in English any time, any where"/>
      <meta name="googlebot" content="noarchive"/>
      <meta name="robots" content="noarchive"/>

      <meta property="og:type" content="website"/>
      <meta property="og:rich_attachment" content="true"/>
      <meta property="og:image"  content={LogoDark}/>
      <meta property="og:image:width"  content="720"/>
      <meta property="og:image:height"  content="480"/>
      <meta property="article:published_time" content=""/>
      <meta property="article:modified_time" content=""/>
      <meta property="og:url" content="/"/>
      <meta property="og:title"   content="NEXTER - THE SOCIAL NETWORK FOR ENGLISH LEANRERS" />
      <meta property="og:description"   content="Find friends to chat and speak in English any time, any where" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
