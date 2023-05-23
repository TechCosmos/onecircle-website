import Head from 'next/head';
import React from 'react';
import Blog from '../component/Blog/Blog';
import Layout from '../component/Layout';
import data from '../../data/blog.json'
import MetaTags from '../utils/meta';

const blog = () => {
  
  return (
    <Layout>
      <MetaTags
          title="Blog - Onewanko"
          description=""
          image="/assets/default.png"
          url="onewanko.com/blog"
        />
    <Blog />
    </Layout>
  )
}

export default blog
