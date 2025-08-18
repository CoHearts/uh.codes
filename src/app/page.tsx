import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";

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
