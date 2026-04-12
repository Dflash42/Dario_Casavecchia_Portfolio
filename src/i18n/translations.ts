export type Language = "en" | "it";

export const translations = {
  // Nav
  nav: {
    about: { en: "About Me", it: "Chi Sono" },
    experience: { en: "Experience", it: "Esperienza" },
    skills: { en: "Skills", it: "Competenze" },
    projects: { en: "Projects", it: "Progetti" },
    contacts: { en: "Contacts", it: "Contatti" },
    letsTalk: { en: "Let's Talk", it: "Parliamo" },
  },

  // Hero
  hero: {
    greeting: { en: "Hi, my name is", it: "Ciao, mi chiamo" },
    role: { en: "Data Analyst", it: "Data Analyst" },
    description: {
      en: "Data Engineer passionate about bridging the gap between business needs and technical solutions. Specialized in Time Series Analysis, predictive modeling, and Business Intelligence, with a unique blend of financial acumen and data science expertise.",
      it: "Data Engineer appassionato nel colmare il divario tra esigenze aziendali e soluzioni tecniche. Specializzato in Analisi delle Serie Temporali, modelli predittivi e Business Intelligence, con una combinazione unica di competenze finanziarie e data science.",
    },
    viewWork: { en: "View My Work", it: "I Miei Progetti" },
    downloadCv: { en: "Download CV", it: "Scarica CV" },
  },

  // About
  about: {
    title: { en: "About Me", it: "Chi Sono" },
    yearsExp: { en: "Years Experience", it: "Anni di Esperienza" },
    projectsCompleted: { en: "Projects Completed", it: "Progetti Completati" },
    bio1: {
      en: "I'm a Data Engineer with a passion for turning raw data into meaningful business insights. Currently at STORViX in Lund, Sweden. I specialize in financial analysis, revenue forecasting, and the AVALoN project focusing on predictive models for data storage. My technical toolkit includes Python, SQL, Power BI, and advanced Time Series Analysis skills I developed during my Higher VET Certificate in Big Data Analytics at ITS Angelo Rizzoli.",
      it: "Sono un Data Engineer con la passione di trasformare dati grezzi in insight aziendali significativi. Attualmente lavoro presso STORViX a Lund, Svezia. Mi specializzo in analisi finanziaria, previsione dei ricavi e nel progetto AVALoN focalizzato su modelli predittivi per lo storage dei dati. Il mio toolkit tecnico include Python, SQL, Power BI e competenze avanzate in Analisi delle Serie Temporali sviluppate durante il mio Diploma ITS in Big Data Analytics presso ITS Angelo Rizzoli.",
    },
    bio2: {
      en: "What sets me apart is my diverse background: from assembling industrial inverters at SECOM to financial accounting internships, I've gained a practical understanding of how data impacts real-world operations. Beyond the code, I'm a natural team player: 14 years of basketball, many as team captain, taught me leadership, adaptability, and the value of collaboration. When I'm not working with data, you'll find me cycling, hiking, or exploring new restaurants.",
      it: "Ciò che mi contraddistingue è il mio background diversificato: dall'assemblaggio di inverter industriali presso SECOM agli stage in contabilità finanziaria, ho acquisito una comprensione pratica di come i dati impattano le operazioni reali. Oltre al codice, sono un giocatore di squadra naturale: 14 anni di basket, molti come capitano, mi hanno insegnato leadership, adattabilità e il valore della collaborazione. Quando non lavoro con i dati, mi troverete a pedalare, fare escursioni o esplorare nuovi ristoranti.",
    },
  },

  // Experience
  experience: {
    title: { en: "Career & Education", it: "Carriera & Formazione" },
    tabExperience: { en: "Experience", it: "Esperienza" },
    tabStudies: { en: "Studies", it: "Studi" },
    languagesTitle: { en: "Languages", it: "Lingue" },
    experiences: [
      {
        role: { en: "Data Scientist", it: "Data Scientist" },
        company: { en: "STORViX AB", it: "STORViX AB" },
        period: { en: "Jan 2026 – Present", it: "Gen 2026 – Presente" },
        description: {
          en: "Co‑developing Archimedes/ULYSSES, STORViX's telemetry and analytics platform for AiRE storage, with Python pipelines for vector analysis, forecasting, anomaly detection and automated "AiRE Smart Alignment" reports.",
          it: "Co-sviluppo di Archimedes/ULYSSES, la piattaforma di telemetria e analytics di STORViX per lo storage AiRE, con pipeline Python per analisi vettoriale, forecasting, anomaly detection e report automatizzati "AiRE Smart Alignment".",
        },
        link: "https://www.linkedin.com/company/storvix/",
      },
      {
        role: { en: "Product Assembler", it: "Assemblatore di Prodotti" },
        company: { en: "SECOM Srl", it: "SECOM Srl" },
        period: { en: "Sep 2023 – Feb 2024", it: "Set 2023 – Feb 2024" },
        description: {
          en: "Performed precision assembly of inverters and cable systems for metal smelting plants, ensuring quality compliance and operational safety standards.",
          it: "Assemblaggio di precisione di inverter e sistemi di cablaggio per impianti di fusione metalli, garantendo conformità qualitativa e standard di sicurezza operativa.",
        },
        link: "https://www.linkedin.com/company/secom-power/",
      },
      {
        role: { en: "Financial Accountant", it: "Contabile Finanziario" },
        company: { en: "Dott. Galbusera's Private Practice", it: "Studio Privato Dott. Galbusera" },
        period: { en: "Feb 2022 – Mar 2022", it: "Feb 2022 – Mar 2022" },
        description: {
          en: "80-hour professional internship in accounting operations.",
          it: "Stage professionale di 80 ore in operazioni contabili.",
        },
      },
    ],
    studies: [
      {
        degree: { en: "Higher VET Certificate in Big Data Analysis", it: "Diploma ITS in Analisi Big Data" },
        institution: { en: "ITS Angelo Rizzoli", it: "ITS Angelo Rizzoli" },
        period: { en: "2024 – Present", it: "2024 – Presente" },
        description: {
          en: "Inter-disciplinary programmes and qualifications involving Information and Communication Technologies (ICTs), Database and network design and administration",
          it: "Programmi e qualifiche interdisciplinari riguardanti Tecnologie dell'Informazione e della Comunicazione (ICT), progettazione e amministrazione di database e reti",
        },
        link: "https://www.itsrizzoli.it/",
      },
      {
        degree: { en: "High School Diploma", it: "Diploma di Maturità" },
        institution: { en: "ISS Francesco Viganò", it: "ISS Francesco Viganò" },
        period: { en: "2018 – 2023", it: "2018 – 2023" },
        description: {
          en: "Management and administration, Business, administration and law not elsewhere classified, Finance, banking and insurance, Secretarial and office work",
          it: "Amministrazione e gestione, Economia aziendale, amministrazione e diritto, Finanza, banche e assicurazioni, Lavoro di segreteria e d'ufficio",
        },
        link: "https://www.issvigano.edu.it/",
      },
    ],
    languages: [
      { name: { en: "Italian", it: "Italiano" }, level: { en: "Native", it: "Madrelingua" }, percentage: 100 },
      { name: { en: "English", it: "Inglese" }, level: { en: "C1", it: "C1" }, percentage: 85 },
      { name: { en: "German", it: "Tedesco" }, level: { en: "B1", it: "B1" }, percentage: 60 },
      { name: { en: "French", it: "Francese" }, level: { en: "A2", it: "A2" }, percentage: 35 },
    ],
  },

  // Skills
  skills: {
    title: { en: "Skills", it: "Competenze" },
    hardSkills: { en: "Hard Skills", it: "Hard Skills" },
    softSkills: { en: "Soft Skills", it: "Soft Skills" },
    hardCategories: [
      { title: { en: "Data Engineering", it: "Data Engineering" }, skills: ["Python", "SQL", "PostgreSQL", "MySQL", "Databricks", "MongoDB", "NoSQL"] },
      { title: { en: "Analytics & BI", it: "Analytics & BI" }, skills: ["Power BI", "DAX", "RStudio", "Pandas", "Matplotlib", "Seaborn"] },
      { title: { en: "Cloud & DevOps", it: "Cloud & DevOps" }, skills: ["AWS", "Azure", "Docker", "Git", "Postman"] },
      { title: { en: "Tools & Platforms", it: "Strumenti & Piattaforme" }, skills: ["Microsoft Excel", "DBeaver", "Scikit-learn", "Statsmodels"] },
    ],
    softItems: [
      { title: { en: "Leadership", it: "Leadership" }, description: { en: "14 years of basketball, many as team captain: leading by example and motivating others.", it: "14 anni di basket, molti come capitano: guidare con l'esempio e motivare gli altri." } },
      { title: { en: "Adaptability", it: "Adattabilità" }, description: { en: "From financial accounting to industrial assembly to data engineering: thriving in diverse environments.", it: "Dalla contabilità finanziaria all'assemblaggio industriale al data engineering: eccellere in ambienti diversi." } },
      { title: { en: "Team Collaboration", it: "Lavoro di Squadra" }, description: { en: "Natural team player who values communication, shared goals, and collective problem-solving.", it: "Giocatore di squadra naturale che valorizza la comunicazione, gli obiettivi condivisi e la risoluzione collettiva dei problemi." } },
      { title: { en: "Analytical Thinking", it: "Pensiero Analitico" }, description: { en: "Breaking down complex problems into actionable insights with a structured, data-driven approach.", it: "Scomporre problemi complessi in insight azionabili con un approccio strutturato e basato sui dati." } },
      { title: { en: "Continuous Learning", it: "Apprendimento Continuo" }, description: { en: "Constantly exploring new technologies, methodologies, and domains to stay ahead.", it: "Esplorare costantemente nuove tecnologie, metodologie e domini per restare al passo." } },
    ],
  },

  // Projects
  projects: {
    title: { en: "Projects", it: "Progetti" },
    items: [
      { title: { en: "Project Work FTA Analysis", it: "Project Work Analisi FTA" }, description: { en: "An institutional dashboard for an italian tech school tracking student enrollment, course growth, and company partnerships from 2019 to 2024.", it: "Una dashboard istituzionale per una scuola tecnica italiana che monitora le iscrizioni degli studenti, la crescita dei corsi e le partnership aziendali dal 2019 al 2024." } },
      { title: { en: "Pizza Business Intelligence", it: "Pizza Business Intelligence" }, description: { en: "A Power BI dashboard visualizing pizza sales metrics, including revenue, best-selling items, and peak order times to optimize business performance.", it: "Una dashboard Power BI che visualizza metriche di vendita delle pizze, inclusi ricavi, articoli più venduti e orari di punta per ottimizzare le performance aziendali." } },
      { title: { en: "Analysis of Monthly Fish Births in the Pacific", it: "Analisi delle Nascite Mensili di Pesci nel Pacifico" }, description: { en: "A time series analysis of Pacific fish births (1968-1987) using SARIMA models to forecast cyclical trends and handle data anomalies.", it: "Un'analisi delle serie temporali delle nascite di pesci nel Pacifico (1968-1987) utilizzando modelli SARIMA per prevedere trend ciclici e gestire anomalie nei dati." } },
      { title: { en: "Truck Sales Analysis", it: "Analisi Vendite Camion" }, description: { en: "A predictive modeling project using SARIMA to forecast monthly truck sales, featuring seasonal decomposition and accuracy validation.", it: "Un progetto di modellazione predittiva che usa SARIMA per prevedere le vendite mensili di camion, con decomposizione stagionale e validazione dell'accuratezza." } },
      { title: { en: "NBA Salaries Analysis", it: "Analisi Stipendi NBA" }, description: { en: "This project applies statistical models to NBA salaries, analyzing distributions and performing regression tests on variables like True Shooting % and Age. It concludes that these factors significantly but only partially influence player earnings.", it: "Questo progetto applica modelli statistici agli stipendi NBA, analizzando distribuzioni ed eseguendo test di regressione su variabili come True Shooting % ed Età." } },
      { title: { en: "Efficency Analysis of the NBA Players", it: "Analisi dell'Efficienza dei Giocatori NBA" }, description: { en: "This project analyzes the 2023-24 NBA season efficiency of four key players using statistical variables and boxplots. It applies probability rules, including Bayes' theorem, to solve real-world problems regarding player performance and match results.", it: "Questo progetto analizza l'efficienza della stagione NBA 2023-24 di quattro giocatori chiave utilizzando variabili statistiche e boxplot. Applica regole di probabilità, incluso il teorema di Bayes." } },
    ],
  },

  // Contact
  contact: {
    title: { en: "Get In Touch", it: "Contattami" },
    downloadCv: { en: "Download My CV", it: "Scarica il Mio CV" },
    myLinkedin: { en: "My LinkedIn", it: "Il Mio LinkedIn" },
  },

  // Footer
  footer: {
    rights: { en: "All rights reserved.", it: "Tutti i diritti riservati." },
  },
} as const;

export type TranslationKey = typeof translations;
