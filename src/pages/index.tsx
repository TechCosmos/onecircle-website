import React from 'react';
import Hero from '../component/Hero/Hero';
import Feature from '../component/Features/Features';
import Layout from '../component/Layout';
import MetaTags from '../utils/meta';

const  index = () => {

  return (
    
    <Layout>
      <MetaTags
          title="Onewanko labs: We build technology"
          description="We build technology"
          image="/assets/default.png"
          url="onewanko.com"
        />
      <Hero />
      <Feature />
    </Layout>
  )
}

export default index;