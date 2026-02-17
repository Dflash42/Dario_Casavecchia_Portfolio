import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Wrench, Brain, Users } from "lucide-react";

const hardSkillCategories = [
  {
    title: "Data Engineering",
    icon: <Code2 size={18} />,
    skills: ["Python", "SQL", "PostgreSQL", "MySQL", "MongoDB", "NoSQL"],
  },
  {
    title: "Analytics & BI",
    icon: <Wrench size={18} />,
    skills: ["Power BI", "DAX", "RStudio", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Code2 size={18} />,
    skills: ["AWS", "Azure", "Docker", "Git", "Postman"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={18} />,
    skills: ["DBeaver", "Microsoft Excel", "Scikit-learn", "Statsmodels"],
  },
];

const softSkills = [
  {
    title: "Leadership",
    description: "14 years of basketball, many as team captain: leading by example and motivating others.",
  },
  {
    title: "Adaptability",
    description: "From financial accounting to industrial assembly to data engineering: thriving in diverse environments.",
  },
  {
    title: "Team Collaboration",
    description: "Natural team player who values communication, shared goals, and collective problem-solving.",
  },
  {
    title: "Analytical Thinking",
    description: "Breaking down complex problems into actionable insights with a structured, data-driven approach.",
  },
  {
    title: "Continuous Learning",
    description: "Constantly exploring new technologies, methodologies, and domains to stay ahead.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Skills<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        {/* Hard Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-primary" size={24} />
            <h3 className="text-2xl md:text-3xl font-bold">
              Hard Skills<span className="text-primary">.</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {hardSkillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="h-full md:hover:shadow-lg md:hover:border-primary/30 md:hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-primary">{category.icon}</span>
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-primary" size={24} />
            <h3 className="text-2xl md:text-3xl font-bold">
              Soft Skills<span className="text-primary">.</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="h-full md:hover:shadow-lg md:hover:border-primary/30 md:hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
