import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Pizza Business Intelligence",
    description: "Business intelligence analysis of a fittitius Domino's Pizza restaurant.",
    tags: ["PowerBi", "DAX", "Excel", "SQL", "Python"],
    image: "/imgs/pizzabi.png",
    pdfLink: "/slides/pizzas.pdf"
  },
  {
    title: "Analysis of Monthly Fish Births in the Pacific",
    description: "Time series analysis of monthly fish births in the Pacific Ocean.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"],
    image: "/imgs/esamepesci.png",
    pdfLink: "/slides/esame_pesci.pdf"
  },
  {
    title: "Truck Sales Analysis",
    description: "Analysis and forecasting of truck sales data.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"],
    image: "/imgs/trucksales.png",
    pdfLink: "/slides/progetto1.pdf"
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
              <a
                href={project.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full group hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
