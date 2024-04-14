import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Products from "./components/Products/Products";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
