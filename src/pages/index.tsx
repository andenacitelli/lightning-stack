import Head from "next/head";
import {SITE_DATA} from "@/config/common";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_DATA.title}</title>
        <meta name="description" content={SITE_DATA.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
