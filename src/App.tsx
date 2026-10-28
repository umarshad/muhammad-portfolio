import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TechMarquee } from "@/components/TechMarquee";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";

function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <WhatsAppFab />
    </>
  );
}

export default App;
