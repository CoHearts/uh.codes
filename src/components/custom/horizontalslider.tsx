"use client";

const techIcons = [
  { name: "HTML5", src: "/icons/html.svg" },
  { name: "CSS3", src: "/icons/css.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "TypeScript", src: "/icons/typescript.svg" },
  { name: "Next.js", src: "/icons/nextjs.svg" },
  { name: "Bootstrap", src: "/icons/bootstrap.svg" },
  { name: "Tailwind", src: "/icons/tailwind.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "Spring Boot", src: "/icons/spring-boot.svg" },
  { name: "Supabase", src: "/icons/supabase.svg" },
  { name: "Flask", src: "/icons/flask.svg" },
  { name: "Git", src: "/icons/git.svg" },
  { name: "Linux", src: "/icons/linux.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "Azure", src: "/icons/azure.svg" },
  { name: "Tensorflow", src: "/icons/tensorflow.svg" },
  { name: "Numpy", src: "/icons/numpy.svg" },

];

export default function HorizontalSlider() {
  return (
    <div className="w-full overflow-hidden rounded-lg py-8">
      <div className="flex animate-scroll">
        {/* First set of icons */}
        <div className="flex shrink-0 gap-8 px-4">
          {techIcons.map((icon, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-12 h-12 bg-background rounded-lg shadow-sm flex items-center justify-center p-2">
                <img
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {icon.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0 gap-8 px-4">
          {techIcons.map((icon, index) => (
            <div
              key={`second-${index}`}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-12 h-12 bg-background rounded-lg shadow-sm flex items-center justify-center p-2">
                <img
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
