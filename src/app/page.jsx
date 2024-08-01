
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Products from "./components/Products/Products";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Projects />
      <Testimonials />
    </>
  );
}
