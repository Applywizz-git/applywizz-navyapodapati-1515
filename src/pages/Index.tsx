import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen relative">
          {/* Fixed background image */}
          <div 
            className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "/bgimage.png" }}
          />
          
          <div className="bg-background/40 backdrop-blur-md min-h-screen">
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Certifications />
              <Education />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
