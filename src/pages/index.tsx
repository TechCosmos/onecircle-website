import React from 'react';
import Hero from '../component/Hero/Hero';
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
    </Layout>
  )
}

export default index;