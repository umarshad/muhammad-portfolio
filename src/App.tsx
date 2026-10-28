import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
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
        <Projects />
      </main>
      <Contact />
      <WhatsAppFab />
    </>
  );
}

export default App;
