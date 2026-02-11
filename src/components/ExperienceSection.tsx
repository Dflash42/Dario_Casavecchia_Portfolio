import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    description:
      "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 – 2022",
    description:
      "Built and shipped 3 customer-facing products from scratch using React, Node.js, and PostgreSQL. Reduced page load times by 40%.",
  },
  {
    role: "Frontend Developer",
    company: "WebAgency Co.",
    period: "2019 – 2020",
    description:
      "Developed responsive web applications for enterprise clients. Collaborated with designers to implement pixel-perfect UIs.",
  },
  {
    role: "Junior Developer",
    company: "DevStudio",
    period: "2018 – 2019",
    description:
      "Contributed to full-stack projects, fixed bugs, and built internal tools. Learned agile methodologies and best practices.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex mb-10 ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 top-6 z-10 ring-4 ring-background" />

              <Card
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] hover:shadow-lg transition-shadow ${
                  i % 2 === 0 ? "md:mr-auto md:mr-8" : "md:ml-auto md:ml-8"
                }`}
              >
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-primary">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
