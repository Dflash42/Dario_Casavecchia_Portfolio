import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { Briefcase, GraduationCap, Languages, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer",
    company: "STORViX AB",
    period: "Jan 2026 – Present",
    description: "",
    link: "https://www.linkedin.com/company/storvix/",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 – 2022",
    description: "",
    link: "https://www.linkedin.com/company/startupxyz",
  },
];

const studies = [
  {
    degree: "Higher VET Certificate in Big Data Analytics",
    institution: "ITS Angelo Rizzoli",
    period: "2024 – Present",
    description: "",
    link: "https://www.itsrizzoli.it/",
  },
  {
    degree: "High School Diploma",
    institution: "ISS Francesco Viganò",
    period: "2018 – 2023",
    description: "",
    link: "https://www.issvigano.edu.it/",
  },
];

const languages = [
  { name: "Italian", level: "Native", percentage: 100 },
  { name: "English", level: "C1", percentage: 85 },
  { name: "German", level: "B1", percentage: 60 },
  { name: "French", level: "A2", percentage: 35 },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "studies">("experience");
  const [tabDirection, setTabDirection] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleTabChange = (tab: "experience" | "studies") => {
    setTabDirection(tab === "studies" ? 1 : -1);
    setActiveTab(tab);
  };

  const currentData = activeTab === "experience" ? experiences : studies;

  // Tab slide variants — vertical direction based on switch
  const tabContentVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Career & Education<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex gap-4 mb-12 flex-wrap"
        >
          <button
            onClick={() => handleTabChange("experience")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "experience"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
          >
            <Briefcase size={18} />
            Experience
          </button>
          <button
            onClick={() => handleTabChange("studies")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "studies"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
          >
            <GraduationCap size={18} />
            Studies
          </button>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-16">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-[0.5px] overflow-hidden"
          >
            <motion.div
              className="w-full bg-border h-full origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Glowing pulse traveling down the line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent"
              initial={{ y: "-100%" }}
              animate={isInView ? { y: "600%" } : { y: "-100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Cards with AnimatePresence for tab switching */}
          <AnimatePresence mode="wait" custom={tabDirection}>
            <motion.div
              key={activeTab}
              custom={tabDirection}
              variants={tabContentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {currentData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`relative flex mb-10 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute left-[8px] md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 top-6 z-10 ring-4 ring-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                  />

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:mr-8" : "md:ml-auto md:ml-8"}`}
                  >
                    <Card className="group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 relative">
                        <ExternalLink
                          size={14}
                          className="absolute top-4 right-4 text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300"
                        />
                        <span className="text-xs font-medium text-primary">{item.period}</span>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                          {"role" in item ? item.role : item.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {"company" in item ? item.company : item.institution}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Languages className="text-primary" size={28} />
            <h3 className="text-2xl md:text-3xl font-bold">
              Languages<span className="text-primary">.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-foreground">{lang.name}</span>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
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

export default ExperienceSection;
