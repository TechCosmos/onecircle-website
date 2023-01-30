import React from "react";
import Circle from "../component/Circle/Circle";
import Layout from "../component/Layout";

const circle = ({ contributors, ...props }) => {
  return (
    <Layout>
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
