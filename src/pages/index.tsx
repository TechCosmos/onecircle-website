import React from 'react';
import Hero from '../component/Hero/Hero';
import Feature from '../component/Features/Features';
import Layout from '../component/Layout';
import MetaTags from '../utils/meta';

const  index = () => {

  return (
    
    <Layout>
      <MetaTags
          title="Home - Onewanko"
          description="We help to build the next generations of the technology."
          image="/assets/default.png"
          url="onewanko.com"
        />
      <Hero />
      <Feature />
    </Layout>
  )
}

export default index;