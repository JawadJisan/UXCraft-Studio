import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "/logo.png";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navItems: { id: string; label: string }[];
}

const Header = ({ activeSection, setActiveSection, navItems }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-studio-dark/80 backdrop-blur-md shadow-xl border-b border-studio-accent-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            {/* <div className="p-2 rounded-xl bg-gradient-to-r from-studio-accent-purple to-studio-accent-blue shadow-lg group-hover:shadow-studio-accent-purple/50 transition-all duration-300">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-orbitron font-bold bg-gradient-to-r from-studio-accent-purple to-studio-accent-blue bg-clip-text text-transparent">
                UXCraft
              </h1>
              <p className="text-xs text-studio-gray-400 font-inter">Studio</p>
            </div> */}
            {/* <img
              src={logo}
              alt="Studio Logo"
              // className="h-20 w-16 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
              className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
            /> */}
            <div className="w-32 h-20 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
              <img
                src={logo}
                alt="Studio Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-inter font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-studio-accent-purple bg-studio-accent-purple/10"
                    : "text-white hover:text-studio-accent-purple hover:bg-white/5"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-studio-accent-purple rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-studio-accent-purple to-studio-accent-blue hover:from-studio-accent-blue hover:to-studio-accent-purple text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-studio-accent-purple/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              {/* Get Started */}
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-studio-dark/95 backdrop-blur-md border-t border-studio-accent-purple/20 animate-fade-in">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-inter font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-studio-accent-purple bg-studio-accent-purple/10"
                      : "text-white hover:text-studio-accent-purple hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full mt-4 bg-gradient-to-r from-studio-accent-purple to-studio-accent-blue text-white"
                onClick={() => scrollToSection("contact")}
              >
                {/* Get Started */}
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
