import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const getAssetPath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const projectMeta = [
  { tags: ["PowerBi", "Python", "Azure", "Postman", "API"], image: getAssetPath("imgs/fta.png"), pdfLink: getAssetPath("slides/fta.pdf") },
  { tags: ["PowerBi", "DAX", "Excel", "SQL", "Python"], image: getAssetPath("imgs/pizzabi.png"), pdfLink: getAssetPath("slides/pizzas.pdf") },
  { tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"], image: getAssetPath("imgs/esamepesci.png"), pdfLink: getAssetPath("slides/esame_pesci.pdf") },
  { tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"], image: getAssetPath("imgs/trucksales.png"), pdfLink: getAssetPath("slides/Truck_Sales.pdf") },
  { tags: ["Excel", "Python", "R", "RStudio"], image: getAssetPath("imgs/nbasalaries.png"), pdfLink: getAssetPath("slides/nbasalaries.pdf") },
  { tags: ["Excel", "Python", "R", "RStudio"], image: getAssetPath("imgs/stats.png"), pdfLink: getAssetPath("slides/Stats.pdf") },
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
    setTransform(`perspective(800px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg) scale(1.02)`);
    setShadow(`${(x - 0.5) * -20}px ${(y - 0.5) * -20}px 30px -10px hsl(var(--primary) / 0.15)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.08 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setShadow("");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ transform, boxShadow: shadow, transition: "transform 300ms ease-out, box-shadow 300ms ease-out", willChange: "transform" }} className="relative h-full">
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-lg z-10"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsl(var(--primary) / ${glare.opacity}), transparent 60%)`, transition: "background 300ms ease-out" }} />
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const p = translations.projects;

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t(p.title)}<span className="text-primary">.</span></h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {p.items.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: false, amount: 0.2 }}>
              <TiltCard>
                <a href={projectMeta[i].pdfLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="h-full group hover:border-primary/30 transition-colors duration-300 overflow-hidden">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${projectMeta[i].image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">{t(project.title)}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(project.description)}</p>
                      <div className="flex flex-wrap gap-2">
                        {projectMeta[i].tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
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
