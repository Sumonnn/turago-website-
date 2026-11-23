
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import DownloadApp from "@/components/DownloadApp";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <DownloadApp />
        <ContactFooter />
      </main>
    </>
  );
}
