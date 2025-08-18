import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-25 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/144355134?v=4"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Hi, <span className="text-primary">Udasri here..</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Code Alchemist | AI Explorer | Web Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm a Computer Science undergrad blending logic with imagination. I
            craft scalable, smart full-stack web experiences while diving deep
            into the worlds of AI, ML.😄🧑‍💻
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link href={"https://github.com/UdasriHasindu"}>
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </Link>

          <Link href={"https://www.linkedin.com/in/udasri-hasindu/"}>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
