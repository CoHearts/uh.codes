import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import { Skills } from "@/components/custom/skills";
// import ChatbotWidget from "@/components/custom/chatbot";
import { Contact } from "@/components/custom/contact";
import { Projects } from "@/components/custom/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        {/* <ChatbotWidget /> */}
      </div>
    </>
  );
}
