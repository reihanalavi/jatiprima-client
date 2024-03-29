import { Inter } from "@next/font/google";
import BackToTop from "@/components/molecules/Back To Top";
import Page from "@/components/organisms/Page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jati Prima Furniture</title>
        <meta name="description" content="Best furniture mebel from Jepara" />
        <meta name="og:title" content="Jati Prima Furniture" />
        <meta name="og:image" content="/media/hero_jp.jpeg" />
        <meta name="og:url" content="https://jatiprimafurniture.com/" />
      </Head>

      <Page />

      <BackToTop />
    </>
  );
}
