import Head from "next/head";
import { FunctionComponent } from "react";

interface MetaHeadProps {
  title?: string;
}

const MetaHead: FunctionComponent<MetaHeadProps> = ({ title = "" }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <title>Ethiopian StartUps {title ? ` - ${title}` : ""}</title>

      <meta name="description" content="The big list of Ethiopian startups." />
      <link rel="icon" type="image/png" href="/favicon.png" />

      <meta property="og:title" content="Ethiopian Startups" />
      <meta
        property="og:description"
        content="The big list of ethiopian startups."
      />
      <meta property="og:image" content="/ethiopic_bg.png" />
      <meta
        name="keywords"
        content="startups,ethiopia,ethiopian,startup list,ethiopian incubators,ethiopian startups,ethiopian hubs"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#e5e7eb" />
    </Head>
  );
};

export default MetaHead;
