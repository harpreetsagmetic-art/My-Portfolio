import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Deliverables from "@/components/Deliverables";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="md:pl-20">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Deliverables />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
