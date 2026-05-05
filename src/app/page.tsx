import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import { Skills } from "@/components/custom/skills";
import { Contact } from "@/components/custom/contact";
import { Projects } from "@/components/custom/projects";
import { Achievements } from "@/components/custom/achievements";
import { ChatbotWidget } from "@/components/custom/chatbot";
import { Certificates } from "@/components/custom/certificates";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Skills />
        <Certificates />
        <Projects />
        <Achievements />
        <Contact />
        <ChatbotWidget />
      </div>
    </>
  );
}
