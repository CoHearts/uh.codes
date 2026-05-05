"use client";

import { useEffect, useRef } from "react";

const certificates = [
  {
    title: "Introduction to AI concepts",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/ai-concepts.webp",
  },
  {
    title: "Introduction to machine learning concepts",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/BCVPV75D?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/ml-concepts.webp",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2025",
    link: "https://www.credly.com/badges/d3a535cd-c63c-4f7f-91a6-cdfe4b159a7c/public_url",
    image: "/certificates/github.webp",
  },
  {
    title: "Train and evaluate regression models",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/regression-models.webp",
  },
  {
    title: "Introduction to generative AI and agents",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/3ALN74EH?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/generative-ai.webp",
  },
  {
    title: "Fundamentals of AI Agents",
    issuer: "Hugging Face",
    date: "2026",
    link: "https://www.coursera.org",
    image: "/certificates/agent-fundamentals.webp",
  },
  {
    title: "Explore and analyze data with Python",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/python-data-analysis.webp",
  },
  {
    title: "BioFusion AI Hackathon",
    issuer: "University of Jayawardhanapura",
    date: "2025",
    link: "https://events.vtools.ieee.org/m/536210",
    image: "/certificates/biofusion.webp",
  },
];

export function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    // For a seamless loop we duplicate the items in the DOM and
    // treat half of the scrollWidth as the repeating segment.
    const totalScrollable =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const halfScroll = totalScrollable / 2;
    let scrollPosition = halfScroll;

    const animate = () => {
      const maxScroll = totalScrollable;

      // move left->right by decreasing scrollLeft
      scrollPosition -= 1;
      if (scrollPosition < 0) {
        scrollPosition = halfScroll;
      }

      scrollContainer.scrollLeft = scrollPosition;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Certifications
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Professional certifications and achievements
        </p>

        {/* Full-width Auto-scrolling Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden pb-4 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
        >
          <div className="flex gap-6 px-4">
            {/* first set */}
            {certificates.map((cert, index) => (
              <a
                key={`a-${index}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-muted-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-64"
              >
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full text-center">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}

            {/* duplicate set for seamless loop */}
            {certificates.map((cert, index) => (
              <a
                key={`b-${index}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-muted-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-64"
              >
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full text-center">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
