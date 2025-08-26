"use client";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Download,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const fullText = "Hi, Udasri here..";

  useEffect(() => {
    if (hasTyped) {
      setDisplayedText(fullText);
      return;
    }

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setHasTyped(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [hasTyped]);

  return (
    <section id="home" className="pt-25 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <Image
            src="/profile-image.jpeg"
            width={180}
            height={180}
            alt="Picture of the author"
            className="rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 typewriter">
            {displayedText}
            {!hasTyped && <span className="animate-pulse font-thin">|</span>}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Code Alchemist | AI Explorer | Web Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            I&apos;m a Computer Science undergrad blending logic with
            imagination. I build scalable, smart full-stack web experiences with
            a strong focus on <b>backend development</b> and I&apos;m diving
            deep into the worlds of <b>AI, ML, and data science</b> to craft
            intelligent, impactful solutions. 😄🧑‍💻
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
          <Link href={"https://www.facebook.com/share/16taveMWKL/"}>
            <Button variant="ghost" size="icon">
              <Facebook className="w-5 h-5" />
            </Button>
          </Link>{" "}
          <Link
            href={"https://www.instagram.com/u.sri_?igsh=MWl1eTEwNjdxMnFqMA=="}
          >
            <Button variant="ghost" size="icon">
              <Instagram className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
