import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cloud, Database, Server, Zap, Shield } from "lucide-react";
import { personalInfo, stats, topSkills } from "@/data/portfolioData";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gradient-gold text-5xl md:text-6xl font-display font-bold">
      {count}{suffix}
    </span>
  );
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-foreground">{name}</span>
        <span className="font-body text-sm text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full shimmer"
          style={{
            background: "linear-gradient(90deg, hsl(43 55% 70%), hsl(42 45% 78%), hsl(43 55% 70%))",
            backgroundSize: "200% 100%",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const icons = [
    { Icon: Code2, label: "Clean Code" },
    { Icon: Server, label: "Microservices" },
    { Icon: Cloud, label: "Cloud Native" },
    { Icon: Database, label: "Database" },
    { Icon: Zap, label: "Performance" },
    { Icon: Shield, label: "Security" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden py-10">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About Text & Counters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-foreground font-body leading-relaxed mb-8 lg:bg-background/70 lg:p-4 lg:rounded-xl lg:backdrop-blur-sm">
              {personalInfo.summary}
            </p>

            {/* Stats Counters */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center card-luxury p-4 md:p-6 rounded-xl lg:bg-background/80 lg:backdrop-blur-sm flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs sm:text-sm text-foreground font-body mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {icons.map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  className="group flex flex-col items-center gap-2 p-3 md:p-4 glass rounded-xl cursor-pointer glow-gold-hover transition-all duration-300 lg:bg-background/80 lg:backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[0.6rem] sm:text-xs text-foreground font-body text-center">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill Bars */}
          <motion.div
            className="card-luxury p-6 md:p-8 rounded-2xl lg:bg-background/80 lg:backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-6 md:mb-8">
              Core Competencies
            </h3>
            {topSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
