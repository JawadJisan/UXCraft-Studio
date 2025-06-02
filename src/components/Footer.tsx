import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  navItems: { id: string; label: string }[];
  setActiveSection: (section: string) => void;
}

const Footer = ({ navItems, setActiveSection }: FooterProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const services = [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Audio Post-Production",
    "3D Animation",
    "Documentary Editing",
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCzHSHT9GjgiIwv9HY4uiEyg",
      label: "YouTube",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/uxcraftstudio",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://x.com/i/flow/login?redirect_after_login=%2FFaysalAmin75496",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fuxcraft-studio%2Fposts%2F%3FfeedView%3Dall",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-studio-gray-900 border-t border-studio-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-studio">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gradient">
                  UXCraft
                </h3>
                <p className="text-xs text-studio-gray-400 font-inter">
                  Studio
                </p>
              </div>
            </div>

            <p className="text-studio-gray-300 mb-6 leading-relaxed">
              Transforming your vision into stunning visual stories that
              captivate audiences and elevate your brand through professional
              video editing and animation.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.href}
                  className="w-10 h-10 bg-studio-gray-800 hover:bg-studio-accent-purple rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-studio-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-studio-gray-400 hover:text-studio-accent-purple transition-colors font-inter"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-studio-gray-400 font-inter">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-studio-accent-purple" />
                <span className="text-studio-gray-400 font-inter">
                  contact@uxcraftstudio.com and somtheing
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-studio-accent-purple" />
                <span className="text-studio-gray-400 font-inter">
                  +880 1986 483724
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-studio-accent-purple" />
                <span className="text-studio-gray-400 font-inter">
                  {/* Remote Studio Worldwide */}
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                className="btn-primary w-full"
                onClick={() =>
                  window.open("https://wa.me/+8801986483724", "_blank")
                }
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>

              <Button
                variant="outline"
                className="btn-secondary w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-studio-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-studio-gray-400 font-inter text-sm">
              © 2025 UXCraft Studio. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-studio-gray-400 hover:text-studio-accent-purple transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-studio-gray-400 hover:text-studio-accent-purple transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-studio-gray-400 hover:text-studio-accent-purple transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
