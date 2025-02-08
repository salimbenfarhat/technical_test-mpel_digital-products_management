import Hero from "@/app/home/components/Hero";
import About from "@/app/home/components/About";
import FeaturedProducts from "@/app/home/components/FeaturedProducts";
import Testimonials from "@/app/home/components/Testimonials";
import FAQ from "@/app/home/components/FAQ";
import Contact from "@/app/home/components/Contact";

export default function Home() {
  return (
    <div className="bg-background text-textPrimary font-body">
      <Hero />
      <About />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}