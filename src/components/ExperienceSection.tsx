import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Briefcase, GraduationCap, Languages } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
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
];

const studies = [
  {
    degree: "Master in Data Science",
    institution: "University of Technology",
    period: "2020 – 2022",
    description:
      "Specialized in machine learning, statistical analysis, and big data processing. Thesis on predictive analytics.",
  },
  {
    degree: "Bachelor in Computer Science",
    institution: "State University",
    period: "2016 – 2020",
    description:
      "Core curriculum in algorithms, databases, and software engineering. Graduated with honors.",
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

  const currentData = activeTab === "experience" ? experiences : studies;

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="flex gap-4 mb-12 flex-wrap"
        >
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "experience"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
          >
            <Briefcase size={18} />
            Experience
          </button>
          <button
            onClick={() => setActiveTab("studies")}
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
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {currentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex mb-10 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 top-6 z-10 ring-4 ring-background" />

              <Card
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] hover:shadow-lg transition-shadow ${i % 2 === 0 ? "md:mr-auto md:mr-8" : "md:ml-auto md:ml-8"
                  }`}
              >
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-primary">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
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
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
                viewport={{ once: true }}
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
