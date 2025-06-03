import { useState, useEffect } from "react";
import Header from "../components/Header";
import VideoHero from "../components/VideoHero";
import NameAndInfo from "../components/NameAndInfo";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Reels from "../components/Reels";
import Documentary from "../components/Documentary";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import AIProjectVisualizer from "../components/AIProjectVisualizer";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { MoveRight } from "lucide-react";
import AboutVideo from "@/components/AboutVideo";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-studio-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-studio-accent-purple mx-auto mb-4"></div>
          <h2 className="text-2xl font-orbitron text-gradient">
            Loading UXCraft Studio...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-studio-dark text-white relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navItems={navItems}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        {/* <section id="home" className="relative">
          <VideoHero />
          <NameAndInfo />
        </section> */}
        <section id="home" className="relative">
          <VideoHero />
          <AboutVideo />
        </section>

        {/* About Video Section */}
        {/* <section id="about-video">
          <AboutVideo />
        </section> */}
        <section id="about-video">
          <NameAndInfo />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Documentary />
          <Reels />
          <Portfolio />
        </section>

        {/* AI Project Visualizer */}
        <AIProjectVisualizer />

        {/* About Section */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer navItems={navItems} setActiveSection={setActiveSection} />

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 btn-primary rounded-full p-3 z-50"
        size="icon"
      >
        <MoveRight className="h-4 w-4 -rotate-90" />
      </Button>
    </div>
  );
};

export default Index;
