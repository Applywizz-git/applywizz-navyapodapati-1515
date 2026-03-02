import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    // { icon: Github, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-2xl font-display font-semibold text-gradient-gold">
              LP
            </a>
            <p className="text-sm text-muted-foreground font-body flex items-center gap-1">
              © {new Date().getFullYear()} Made
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {/* <Heart className="w-4 h-4 text-primary fill-primary" /> */}
              </motion.span>
              by <span className="text-primary">{personalInfo.name}</span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-gold transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-gold z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
