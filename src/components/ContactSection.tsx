import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In Touch<span className="text-primary">.</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Download CV */}
          <div className="flex justify-center">
            <Button size="lg" asChild className="gap-2">
              <a href="/cv.pdf" download>
                <Download size={18} /> Download My CV
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <a href="mailto:john@example.com" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail size={20} />
              <span>john@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone size={20} />
              <span>+1 234 567 890</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>Rome, Italy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
