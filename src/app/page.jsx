import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
    </>
  );
}
