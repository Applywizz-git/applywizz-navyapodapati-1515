import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute left-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            <span className="text-gradient-gold">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="card-luxury p-8 rounded-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 glass rounded-xl flex items-center justify-center mb-6 glow-gold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Degree */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-all duration-300">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-lg text-primary font-body mb-4">{edu.institution}</p>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {edu.year}
                  </span>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
