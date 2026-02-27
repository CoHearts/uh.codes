"use client";

import { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Heart,
  Calendar,
  MapPin,
} from "lucide-react";

interface AchievementItem {
  type: "achievement" | "volunteering";
  title: string;
  organization: string | React.ReactNode;
  date: string;
  location: string;
  description: string | React.ReactNode[];
  highlights: string[];
  images: string[];
}

const items: AchievementItem[] = [
  {
    type: "achievement",
    title: "1st Place - AI Buildathon",
    organization: "TensorForge 2025",
    date: "March 2024",
    location: "IEEE Computer Society of KDU.",
    description:
      "Proud to share that our team Xplorers won the top spot at the AI Buildathon organized by IEEE Computer Society of KDU. Grateful for the collaboration, creativity, and all the late night debugging that made this possible! 💻 😃✨️",
    highlights: ["AI & ML", "20+ competing teams"],
    images: [
      "/achivements/hackathon1/hack1.jpeg",
      "/achivements/hackathon1/hack2.jpeg",
      "/achivements/hackathon1/hack3.jpeg",
      "/achivements/hackathon1/hack4.jpeg",
    ],
  },
  {
    type: "achievement",
    title: "1st runner up - Hackathon",
    organization: "International Conference in Data Science '25",
    date: "November 2025",
    location: " Stat Circle, University of Colombo",
    description:
      "Won the 2nd place at Mini Hackathon 2025, Organized by Stat Circle, University of Colombo jointly with OCTAVE - John Keells Group as a part of 3rd International Conference in Data Science- ICDS 2025",
    highlights: ["Data Science, ML, Agentic AI", "ICDS 2025", "50+ Teams"],
    images: [
      "/achivements/hackathon2/hack1.jpeg",
      "/achivements/hackathon2/hack2.jpg",
      "/achivements/hackathon2/hack3.jpeg",
      "/achivements/hackathon2/hack4.jpeg",
    ],
  },
  {
    type: "volunteering",
    title: "Tech Community Member",
    organization: (
      <>
        <a
          href="https://fossuok.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          FOSS community, University of Kelaniya
        </a>
      </>
    ),
    date: "Jun 2023 - Present",
    location: "University of Kelaniya",
    description: [
      "2025 - Present: Education & Training Manager",
      "2024 - 2025: Assistant Secretary",
      "2023 - 2024: Logistic and PR member",
    ],
    highlights: [
      "200+ community members",
      "15+ events organized",
      "20+ guest speakers hosted",
    ],
    images: [
      "/achivements/FOSS/team1.webp",
      "/achivements/FOSS/team2.webp",
      "/achivements/FOSS/team3.jpeg",
      "/achivements/FOSS/team4.jpeg",
      "/achivements/FOSS/team5.jpeg",
    ],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-muted group">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - Image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/70 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/70 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-6 bg-foreground"
                : "w-1.5 bg-foreground/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ item }: { item: AchievementItem }) {
  const isAchievement = item.type === "achievement";

  return (
    <Card className="overflow-hidden border-border/60">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2">
          {/* Left: Image Carousel */}
          <div className="p-4">
            <ImageCarousel images={item.images} title={item.title} />
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-center p-6 gap-4">
            <div className="flex items-center gap-2">
              <Badge
                variant={isAchievement ? "default" : "secondary"}
                className="gap-1"
              >
                {isAchievement ? (
                  <Trophy className="h-3 w-3" />
                ) : (
                  <Heart className="h-3 w-3" />
                )}
                {isAchievement ? "Achievement" : "Volunteering"}
              </Badge>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground text-balance">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                {item.organization}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {item.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {item.location}
              </span>
            </div>

            {Array.isArray(item.description) ? (
              <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                {item.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {item.highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs font-normal"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Achievements & Volunteering
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Highlights from competitions, community contributions, and volunteer
            work that I'm proud of.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <AchievementCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
