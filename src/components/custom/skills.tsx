import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HorizontalSlider from "./horizontalslider";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Flask",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Spring Boot",
      ],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Linux", "Docker", "Azure", "Tensorflow"],
    },
  ];

  return (
    <section id="expertise" className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Skills & Technologies
      </h2>

      <HorizontalSlider />
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
