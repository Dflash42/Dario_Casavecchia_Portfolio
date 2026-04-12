import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "it" : "en")}
      className="relative flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-primary/30"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-primary font-bold" : ""}>EN</span>
      <span className="text-border">/</span>
      <span className={lang === "it" ? "text-primary font-bold" : ""}>IT</span>
    </button>
  );
};

export default LanguageToggle;
