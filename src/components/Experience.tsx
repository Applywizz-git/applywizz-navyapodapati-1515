import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden py-10">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Work <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-gold hidden lg:block" />

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <div className="card-luxury p-8 rounded-2xl h-full group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground group-hover:text-gradient-gold transition-all duration-300">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-primary">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-body font-medium">{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground font-body">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {job.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          className="flex items-start gap-3 text-muted-foreground font-body text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: hIndex * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-body rounded-full bg-secondary text-primary border border-primary/20 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
