import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import SchemeGen from "../components/SchemeGen/SchemeGen"

const Scheme = () => (
  <div>
    <Head>
      <title>Iro - Color Scheme Generator</title>
      <link rel="icon" href="/responsive.png" />
    </Head>

    <Layout>
      <SchemeGen />
    </Layout>
  </div>
);

export default Scheme;