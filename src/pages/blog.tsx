import Head from 'next/head';
import React from 'react';
import Blog from '../component/Blog/Blog';
import Layout from '../component/Layout';
import data from '../../data/blog.json'

const blog = () => {
  const link = "onewanko.com/blog"
  const twitter = "@onewankolabs"
  
  return (
    <Layout>
      <Head>
        <title> {data.blog.title} </title>
        <meta name="description" content={data.blog.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={data.blog.title} />
        <meta property="og:description" content={data.blog.description}  />
        <meta property="og:image" content={data.blog.defaul_image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.blog.title} />
        <meta name="twitter:description" content={data.blog.description}  />
        <meta name="twitter:image" content={data.blog.defaul_image} />
        <meta name="twitter:creator" content={twitter} />
      </Head>
    <Blog />
    </Layout>
  )
}

export default blog
