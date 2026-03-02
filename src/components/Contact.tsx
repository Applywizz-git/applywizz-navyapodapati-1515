import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/devika-gade-870920326/" },
    
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground font-body mt-6 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="card-luxury p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary px-0 py-3 font-body text-foreground outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-muted-foreground font-body transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm">
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary px-0 py-3 font-body text-foreground outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-muted-foreground font-body transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm">
                  Your Email
                </label>
              </div>

              {/* Subject */}
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary px-0 py-3 font-body text-foreground outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-muted-foreground font-body transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm">
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary px-0 py-3 font-body text-foreground outline-none transition-colors resize-none peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-muted-foreground font-body transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm">
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-luxury w-full rounded-lg"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass rounded-xl group hover:glow-gold transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">{info.label}</p>
                    <p className="text-foreground font-body">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-gold-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
