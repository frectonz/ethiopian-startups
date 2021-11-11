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
    </Head>
  );
};

export default MetaHead;
