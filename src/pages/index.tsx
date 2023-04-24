import React from 'react';
import Hero from '../component/Hero/Hero';
import Feature from '../component/Features/Features';
import Layout from '../component/Layout';
import Head from 'next/head';
import data from '../../data/hero.json';

const  index = () => {
  const title = "Home - onewanko";
  const link = "onewanko.com"
  const twitter = "@onewankolabs"

  return (
    
    <Layout>
      <Head>
        <title> {title} </title>
        <meta name="description" content={data.home.legend} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={data.home.legend}  />
        <meta property="og:image" content={data.home.defaul_image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={data.home.legend}  />
        <meta name="twitter:image" content={data.home.defaul_image} />
        <meta name="twitter:creator" content={twitter} />
      </Head>
      <Hero />
      <Feature />
    </Layout>
  )
}

export default index;