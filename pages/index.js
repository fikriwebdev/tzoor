import Head from "next/head";
import Image from "next/image";
import Navbar from "../parts/Navbar";
import Hero from "../parts/Hero";
import Show from "../parts/Show";
import Footer from "../parts/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tzoor</title>
        <meta name="description" content="Travel & Tour Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Show />
      <Footer />
    </div>
  );
}
