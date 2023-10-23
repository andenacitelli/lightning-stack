import { SITE_DATA } from "@/SITE_DATA";
import Head from "next/head";

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
