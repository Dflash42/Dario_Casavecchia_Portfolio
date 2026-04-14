import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useCvPath } from "@/hooks/useCvPath";

const ContactSection = () => {
  const { t } = useLanguage();
  const c = translations.contact;
  const cvPath = useCvPath();

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center"><span className="section-title-gradient">{t(c.title)}</span><span className="text-primary">.</span></h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mb-12" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: false, amount: 0.3 }} className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="gap-2 w-full sm:w-auto">
              <a href={cvPath} download><Download size={18} /> {t(c.downloadCv)}</a>
            </Button>
            <Button size="lg" asChild className="gap-2 w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/dario-casavecchia/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> {t(c.myLinkedin)}</a>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <a href="mailto:mj.dario04@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail size={20} /><span>mj.dario04@gmail.com</span></a>
            <a href="tel:+39 331-249-2085" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone size={20} /><span>+39 331-249-2085</span></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
