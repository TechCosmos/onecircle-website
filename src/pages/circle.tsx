import Head from "next/head";
import React from "react";
import Circle from "../component/Circle/Circle";
import Layout from "../component/Layout";
import data from '../../data/circle.json';
import MetaTags from "../utils/meta";

  const circle = ({ contributors, ...props }) => {
  const link = "onewanko.com/circle"
  const twitter = "@onewankolabs"

  return (
    <Layout>
      <MetaTags
          title="Circle - Onewanko"
          description="Join our community: Build together, Grow together"
          image="/assets/default.png"
          url="onewanko.com/circle"
        />
      <Circle />
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
