import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const getAssetPath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const AboutSection = () => {
  const { t } = useLanguage();
  const a = translations.about;

  const stats = [
    { label: t(a.yearsExp), value: "1" },
    { label: t(a.projectsCompleted), value: "10+" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t(a.title)}<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: false, amount: 0.3 }} className="flex flex-col items-center gap-8">
            <div className="w-40 h-40 border-4 border-primary/20 rounded-full overflow-hidden">
              <img src={getAssetPath("imgs/suitme.png")} alt="Dario Casavecchia" className="w-full h-full object-cover" style={{ objectPosition: '50% 35%' }} />
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

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false, amount: 0.3 }} className="md:col-span-2">
            <p className="text-muted-foreground mb-4 leading-relaxed">{t(a.bio1)}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t(a.bio2)}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
