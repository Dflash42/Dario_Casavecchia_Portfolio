import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration. Built for scale with server-side rendering.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    github: "https://github.com"
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.",
    tags: ["TypeScript", "Next.js", "WebSocket", "Prisma"],
    github: "UFS13-Business Intelligence & Data Warehouse/DATA WAREHOUSE/BUSINESS INTELLIGENCE/PROGETTO/PowerBi_Pizza.pptx"
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with real-time charts, filters, and CSV export.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com"
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered tool that generates blog posts, social media content, and marketing copy using GPT APIs.",
    tags: ["React", "OpenAI", "Tailwind", "Supabase"],
    github: "https://github.com"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Projects<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 shrink-0 ml-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
