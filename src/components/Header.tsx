// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { navLinks } from "@/data/portfolioData";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Update active section based on scroll position
//       const sections = navLinks.map((link) => link.href.replace("#", ""));
//       for (const section of sections.reverse()) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 150) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     setIsMobileMenuOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <motion.header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
//         }`}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           {/* Logo */}
//           <motion.a
//             href="#home"
//             className="text-2xl md:text-3xl font-display font-semibold text-gradient-gold"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             onClick={(e) => {
//               e.preventDefault();
//               handleNavClick("#home");
//             }}
//           >
//             DG
//           </motion.a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link.href}
//                 href={link.href}
//                 className={`nav-link font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
//                   activeSection === link.href.replace("#", "")
//                     ? "text-primary active"
//                     : "text-foreground/70 hover:text-foreground"
//                 }`}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(link.href);
//                 }}
//               >
//                 {link.label}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="lg:hidden p-2 text-foreground"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             className="fixed inset-0 z-40 lg:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="absolute inset-0 bg-background/95 backdrop-blur-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />
//             <motion.nav
//               className="relative h-full flex flex-col items-center justify-center gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {navLinks.map((link, index) => (
//                 <motion.a
//                   key={link.href}
//                   href={link.href}
//                   className={`text-2xl font-display font-medium tracking-wider ${
//                     activeSection === link.href.replace("#", "")
//                       ? "text-primary"
//                       : "text-foreground/80"
//                   }`}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 50 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(link.href);
//                   }}
//                   whileHover={{ x: 10, color: "hsl(43, 55%, 70%)" }}
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </motion.nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;









































import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolioData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl md:text-3xl font-display font-semibold text-gradient-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            DG
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`nav-link font-body text-sm uppercase tracking-widest transition-colors duration-300 ${activeSection === link.href.replace("#", "")
                    ? "text-primary active"
                    : "text-foreground/70 hover:text-foreground"
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-foreground z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="h-full flex flex-col pt-24 px-6">
                  <nav className="flex-1 flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        className={`py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${activeSection === link.href.replace("#", "")
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-foreground/80 hover:bg-accent hover:text-foreground"
                          }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        whileHover={{ x: 8 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  {/* Menu Footer */}
                  <motion.div
                    className="py-6 border-t border-border mt-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-sm text-foreground/60 text-center">
                      Scroll to navigate
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
