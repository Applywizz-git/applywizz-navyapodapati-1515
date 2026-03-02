import { motion } from "framer-motion";
import { skills, topSkills } from "@/data/portfolioData";

const ProgressRing = ({ name, percentage }: { name: string; percentage: number }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-28 h-28 ">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            fill="transparent"
            stroke="hsl(var(--secondary))"
            strokeWidth="8"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            fill="transparent"
            stroke="url(#goldGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(43, 55%, 70%)" />
              <stop offset="100%" stopColor="hsl(42, 45%, 78%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-display font-bold text-primary">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm font-body text-foreground">{name}</span>
    </motion.div>
  );
};

const SkillChip = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span
    className="px-4 py-2 glass rounded-full text-sm font-body text-foreground cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground glow-gold-hover"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
  >
    {skill}
  </motion.span>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent opacity-50 rounded-full" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Technical <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Progress Rings for Top Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {topSkills.map((skill) => (
            <ProgressRing key={skill.name} {...skill} />
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="card-luxury p-6 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-display font-semibold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <SkillChip key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
