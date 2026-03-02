import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolioData";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projectImages: Record<string, string> = {
    "sales-dashboard": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "performance-analysis": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div className="relative" ref={containerRef}>
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-gold-hover"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-gold-hover"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Project Card */}
          <motion.div
            key={currentIndex}
            className="card-luxury rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative group overflow-hidden h-64 lg:h-auto">
                <img
                  src={projectImages[projects[currentIndex].image]}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Right: Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {projects[currentIndex].title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground font-body leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {projects[currentIndex].description}
                </motion.p>

                <motion.ul
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[currentIndex].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {highlight}
                    </li>
                  ))}
                </motion.ul>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {projects[currentIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-body rounded-full bg-secondary text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* <button className="btn-luxury rounded-lg flex-1 sm:flex-none">
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </span>
                  </button>
                  <button className="btn-luxury-outline rounded-lg flex-1 sm:flex-none">
                    <span className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </span>
                  </button> */}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
