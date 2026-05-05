"use client";

const experiences = [
  {
    title: "AI Developer Intern",
    company: "Advantage Group Australiasia",
    period: "Current",
    isCurrent: true,
    linkedIn: "https://www.linkedin.com/company/advantage-group-australasia",
  },
  {
    title: "Software Developer Intern",
    company: "NeuraTech (Private) Limited",
    period: "June - December 2024",
    linkedIn: "https://www.linkedin.com/company/neuratechlk",
  },
  {
    title: "Computer Science Undergraduate",
    company: "University of Kelaniya",
    period: "Ongoing",
    isOngoing: true,
    linkedIn: "https://fct.kln.ac.lk/",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="mb-10">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-muted-foreground text-lg text-center mb-12">
          My journey through education and professional development
        </p>
        <div className="relative">
          {/* Centered vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/30"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                {/* Left/Right content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </a>
                      <p className="text-sm text-muted-foreground/70">
                        {exp.period}
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Center timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 ${
                      exp.isCurrent
                        ? "bg-primary border-primary text-primary-foreground"
                        : exp.isOngoing
                          ? "bg-muted border-muted-foreground text-muted-foreground"
                          : "bg-background border-muted-foreground/50"
                    }`}
                  >
                    {exp.isCurrent ? "●" : exp.isOngoing ? "○" : "✓"}
                  </div>
                </div>

                {/* Right/Left content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 1 ? "text-left pl-8" : "text-right pr-8"
                  }`}
                >
                  {index % 2 === 1 ? (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </a>
                      <p className="text-sm text-muted-foreground/70">
                        {exp.period}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
