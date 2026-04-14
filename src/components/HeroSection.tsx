import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useCvPath } from "@/hooks/useCvPath";

const getAssetPath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const roleCycleEN = ["Data Analyst", "Data Engineer", "Problem Solver"];
const roleCycleIT = ["Data Analyst", "Data Engineer", "Problem Solver"];

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const h = translations.hero;
  const cvPath = useCvPath();
  const roles = lang === "it" ? roleCycleIT : roleCycleEN;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 sm:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-primary font-medium mb-3 sm:mb-4 text-base sm:text-lg">
              {t(h.greeting)}
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              Dario Casavecchia<span className="text-primary">.</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-4 sm:mb-6 h-[1.3em] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-[15px] sm:text-lg text-muted-foreground max-w-[90%] sm:max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10 leading-relaxed">
              {t(h.description)}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 mb-8 sm:mb-12 items-center lg:items-start w-full sm:w-auto">
              <Button size="lg" asChild className="w-full sm:w-auto h-11">
                <a href="#projects">{t(h.viewWork)}</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-11">
                <a href={cvPath} download>{t(h.downloadCv)}</a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex gap-5 justify-center lg:justify-start">
              <a href="https://github.com/Dflash42" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/dario-casavecchia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={22} /></a>
              <a href="mailto:mj.dario04@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={22} /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex-shrink-0 lg:self-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-sm" />
              <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img src={getAssetPath("imgs/suitme.png")} alt="Dario Casavecchia" className="w-full h-full object-cover" style={{ objectPosition: "50% 35%" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce block"><ArrowDown size={24} /></a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
