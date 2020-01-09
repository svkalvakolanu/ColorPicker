import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Flash from "../components/Index/Flash";

const Home = () => (
  <div className="home">

    <Head>
      <title>Iro - Home</title>
      <link rel="icon" href="/responsive.png" />
    </Head>

    <Layout>
      <Flash />
    </Layout>

    <style jsx>{`
      .home {
        height: 100vh;
        width: 100vw;
      }
    `}</style>

  </div>
);

export default Home;