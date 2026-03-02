import { motion } from "framer-motion";
import { Award, Cloud, Code, GitBranch, Container, Settings } from "lucide-react";
import { certifications } from "@/data/portfolioData";

const iconMap: Record<string, typeof Award> = {
  java: Code,
  spring: GitBranch,
  aws: Cloud,
  microservices: Settings,
  devops: Container,
  docker: Container,
};

const CertificationCard = ({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) => {
  const Icon = iconMap[cert.icon] || Award;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="card-luxury p-6 rounded-2xl h-full relative overflow-hidden py-10">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 glass rounded-xl flex items-center justify-center mb-4 group-hover:glow-gold transition-all duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-all duration-300">
            {cert.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            {cert.issuer}
          </p>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold transform rotate-45 translate-x-16 -translate-y-16" />
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            <span className="text-gradient-gold">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
