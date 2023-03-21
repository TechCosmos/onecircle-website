import Head from "next/head";
import React from "react";
import Circle from "../component/Circle/Circle";
import Layout from "../component/Layout";
import data from '../../data/circle.json';

  const circle = ({ contributors, ...props }) => {
  const link = "onewanko.com/circle"
  const twitter = "@onewankolabs"

  return (
    <Layout>
      <Head>
        <title> {data.circle.title} </title>
        <meta name="description" content={data.circle.description_title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={data.circle.title} />
        <meta property="og:description" content={data.circle.description_title}  />
        <meta property="og:image" content={data.circle.defaul_image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.circle.title} />
        <meta name="twitter:description" content={data.circle.description_title}  />
        <meta name="twitter:image" content={data.circle.defaul_image} />
        <meta name="twitter:creator" content={twitter} />
      </Head>
      <Circle contributors={contributors} />
    </Layout>
  );
};
export default circle;


export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/repos/onewanko/onewanko-website/contributors",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${process.env.ONEWANKO_TOKEN}`,
      },
    }
  );

  const contributors = await res.json();

  return {
    props: {
      contributors,
    },
  };
}
