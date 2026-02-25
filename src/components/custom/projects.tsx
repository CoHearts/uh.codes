import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Parkinsons Disease Predictor",
      description:
      "This application analyzes voice recordings to predict the likelihood of Parkinson's disease using the Unified Parkinson's Disease Rating Scale (UPDRS).",
      image: "/projects/parkinson.webp",
      technologies: ["Next.js", "Fast API", "Docker", "Azure", "Random Forest", "XGBoost"],
      liveUrl: "https://parkinson-ai-eugccxchaseaascn.centralindia-01.azurewebsites.net/",
      githubUrl: "https://github.com/UdasriHasindu/Parkinsons-Disease-Predictor-app/",
    },
    {
      title: "HallEase",
      description:
      "Faculty events and Hall Management System that tailored solution for university administrators to efficiently manage the scheduling and booking of halls, classrooms, Faculty Areas.",
      image: "/projects/HallEase.webp",
      technologies: ["Next.js", "Supabase", "# Group project"],
      liveUrl: "https://hallease.vercel.app/",
      githubUrl: "https://github.com/zaplink/HallEase",
    },
    {
      title: "QReate",
      description:
      "QR codes generator that instantly generate QR codes for URLs, text, or Wi-Fi credentials.",
      image: "/projects/qreate.webp",
      technologies: ["Python", "Flask", "Azure"],
      liveUrl: "https://qreate-cyd5cxa3e0c6f2ez.eastasia-01.azurewebsites.net/",
      githubUrl: "https://github.com/UdasriHasindu/QReate",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
