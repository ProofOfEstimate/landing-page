import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Imagesection from "./components/Imagesection";
import Join from "./components/Join";

export default function Home() {

  return (
    <>
      <body>
        <Header />
        <Hero />
        <main id="main">
          <Features />
          <Imagesection />
          <Join />
        </main>
        <Footer />
      </body>
    </>
  );
}
