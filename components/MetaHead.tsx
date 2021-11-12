import Head from "next/head";
import * as React from "react";

interface MetaHeadProps {
  title?: string;
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({ title = "" }) => {
  return (
    <Head>
      <title>Ethiopian StartUps {title ? ` - ${title}` : ""}</title>
      <meta name="description" content="The big list of Ethiopian startups." />
      <link rel="icon" type="image/png" href="/ethiopic.png" />

      <meta property="og:title" content="Ethiopian Startups" />
      <meta
        property="og:description"
        content="The big list of ethiopian startups."
      />
      <meta property="og:image" content="/ethiopic_bg.png" />
    </Head>
  );
};

export default MetaHead;
