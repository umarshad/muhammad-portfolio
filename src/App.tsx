import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { TechStack } from "@/components/TechStack";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";

function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Process />
        <Projects />
        <Experience />
        <Skills />
        <Faq />
      </main>
      <Contact />
      <WhatsAppFab />
    </>
  );
}

export default App;
