import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center bg-muted/60 rounded-full p-0.5 border border-border">
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("it")}
        className={`relative z-10 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          lang === "it" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <motion.div
        layout
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-primary rounded-full"
        style={{ left: lang === "en" ? "2px" : "calc(50% + 0px)" }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    </div>
  );
};

export default LanguageToggle;
