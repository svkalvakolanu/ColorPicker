import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import RandomGen from "../components/RandomGen/RandomGen";

const Random = () => (
  <div>
    <Head>
      <title>Iro - Random Color Generator</title>
      <link rel="icon" href="/responsive.png" />
    </Head>

    <Layout>
      <RandomGen />
    </Layout>
  </div>
);

export default Random;
