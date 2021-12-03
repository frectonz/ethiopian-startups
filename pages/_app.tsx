import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

import Layout from "../components/Layout";

const apple = (
  <>
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/icons/apple/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/icons/apple/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/icons/apple/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/icons/apple/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/icons/apple/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/icons/apple/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/icons/apple/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/icons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple/apple-icon-180x180.png"
    />
    <link rel="apple-touch-icon" href="/icons/apple/apple-icon.png" />
  </>
);

const favicon = (
  <>
    <link
      rel="icon"
      sizes="16x16"
      type="image/png"
      href="/icons/favicon/favicon-16x16.png"
    />
    <link
      rel="icon"
      sizes="32x32"
      type="image/png"
      href="/icons/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      sizes="96x96"
      type="image/png"
      href="/icons/favicon/favicon-96x96.png"
    />
  </>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Startups</title>
        <meta
          name="description"
          content="The big list of ethiopian startups."
        />
        <meta
          name="keywords"
          content="startups, ethiopia, ethiopian, list, ethiopian incubators, ethiopian startups"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e5e7eb" />
        {apple}
        {favicon}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
