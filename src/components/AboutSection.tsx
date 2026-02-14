import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Years Experience", value: "1" },
  { label: "Projects Completed", value: "10+" },
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
          viewport={{ once: false, amount: 0.3 }}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-40 h-40 border-4 border-primary/20 rounded-full overflow-hidden">
              <img
                src="/imgs/suitme.png"
                alt="Dario Casavecchia"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
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
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:col-span-2"
          >
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a Data Engineer with a passion for turning raw data into meaningful business
              insights. Currently at STORViX in Lund, Sweden. I specialize in financial analysis,
              revenue forecasting, and the AVALoN project focusing on predictive models for data
              storage. My technical toolkit includes Python, SQL, Power BI, and advanced Time Series
              Analysis skills I developed during my Higher VET Certificate in Big Data Analytics at
              ITS Angelo Rizzoli.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              What sets me apart is my diverse background: from assembling industrial inverters at
              SECOM to financial accounting internships, I've gained a practical understanding of how
              data impacts real-world operations. Beyond the code, I'm a natural team player—14 years
              of basketball, many as team captain, taught me leadership, adaptability, and the value
              of collaboration. When I'm not working with data, you'll find me cycling, hiking, or
              exploring new restaurants.
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
