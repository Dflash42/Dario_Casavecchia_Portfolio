import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project Work ITS Analysis",
    description: "An institutional dashboard for ITS Academy Angelo Rizzoli tracking student enrollment, course growth, and company partnerships from 2019 to 2024.",
    tags: ["PowerBi", "Python", "Azure", "Postan", "API"],
    image: "/imgs/fta.png",
    pdfLink: "/slides/fta.pdf"
  },
  {
    title: "Pizza Business Intelligence",
    description: "A Power BI dashboard visualizing pizza sales metrics, including revenue, best-selling items, and peak order times to optimize business performance.",
    tags: ["PowerBi", "DAX", "Excel", "SQL", "Python"],
    image: "/imgs/pizzabi.png",
    pdfLink: "/slides/pizzas.pdf"
  },
  {
    title: "Analysis of Monthly Fish Births in the Pacific",
    description: "A time series analysis of Pacific fish births (1968-1987) using SARIMA models to forecast cyclical trends and handle data anomalies.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"],
    image: "/imgs/esamepesci.png",
    pdfLink: "/slides/esame_pesci.pdf"
  },
  {
    title: "Truck Sales Analysis",
    description: "A predictive modeling project using SARIMA to forecast monthly truck sales, featuring seasonal decomposition and accuracy validation.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"],
    image: "/imgs/trucksales.png",
    pdfLink: "/slides/progetto1.pdf"
  },
  {
    title: "NBA Salaries Analysis",
    description: "This presentation applies statistical models to NBA salaries, analyzing distributions and performing regression tests on variables like True Shooting % and Age. It concludes that these factors significantly but only partially influence player earnings.",
    tags: ["Excell", "Python", "R", "RStudio"],
    image: "/imgs/nbasalaries.png",
    pdfLink: "/slides/nbasalaries.pdf"
  },
  {
    title: "Efficency Analysis of the NBA Players",
    description: "This project analyzes the 2023-24 NBA season efficiency of four key players using statistical variables and boxplots. It applies probability rules, including Bayes' theorem, to solve real-world problems regarding player performance and match results.",
    tags: ["Excell", "Python", "R", "RStudio"],
    image: "/imgs/stats.png",
    pdfLink: "/slides/Stats.pdf"
  },
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [shadow, setShadow] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    const shadowX = (x - 0.5) * -20;
    const shadowY = (y - 0.5) * -20;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setShadow(`${shadowX}px ${shadowY}px 30px -10px hsl(var(--primary) / 0.15)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.08 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setShadow("");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        boxShadow: shadow,
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out",
        willChange: "transform",
      }}
      className="relative h-full"
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg z-10"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsl(var(--primary) / ${glare.opacity}), transparent 60%)`,
          transition: "background 300ms ease-out",
        }}
      />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
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
              viewport={{ once: false, amount: 0.2 }}
            >
              <TiltCard>
                <a
                  href={project.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full group hover:border-primary/30 transition-colors duration-300 overflow-hidden">
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
