import ChatbotWidget from "@/components/custom/chatbot";
import { Contact } from "@/components/custom/contact";
import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Contact />
        <ChatbotWidget />
      </div>
    </>
  );
}
