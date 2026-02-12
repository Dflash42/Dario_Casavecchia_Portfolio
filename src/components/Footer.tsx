import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col items-center gap-4">
      <div className="flex gap-5">
        <a href="https://github.com/Dflash42" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/dario-casavecchia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={22} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090177546832" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Facebook size={22} />
        </a>
        <a href="https://www.instagram.com/_d.flash_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={22} />
        </a>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dario Casavecchia. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
