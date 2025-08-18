import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
      </div>
    </>
  );
}
