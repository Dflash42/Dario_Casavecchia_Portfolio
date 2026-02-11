import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Years Experience", value: "1" },
  { label: "Projects Completed", value: "30+" },
];

const skills = [
  "Python", "MySQL", "NOSQL", "MongoDB", "DBeaver", "PowerBI", "PostgreSQL", "AWS",
  "Docker", "Microsoft Excel", "RStudio", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About Me<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <Avatar className="w-40 h-40 border-4 border-primary/20">
              <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">
                DC
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio + skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building
              web applications that solve real problems. I love turning complex challenges
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge through technical blog posts.
            </p>

            <h3 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
