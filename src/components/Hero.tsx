import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personalInfo.typewriterTexts[currentTextIndex];
    const typeSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % personalInfo.typewriterTexts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-gradient-gold">{personalInfo.name}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="h-12 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-body text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
              </p>
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {personalInfo.summary.substring(0, 200)}...
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-luxury rounded-lg group"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>

              <a
                href="/AWL-1515-17022026-0347-resume_lakshmi-navya-podapati_da.pdf"
                download
                className="btn-luxury-outline rounded-lg group"
              >
                <span className="flex items-center gap-2">
                  Download Resume
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-ring" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-pulse-ring animation-delay-300" />
              <div className="absolute -inset-12 rounded-full border border-primary/5 animate-pulse-ring animation-delay-500" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass glow-gold">
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
                  <img
                    src="/profileimage.jpg"
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 glass rounded-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">📊</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl">📈</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 glass rounded-lg flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-xl">🗄️</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
