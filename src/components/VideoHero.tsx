import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MoveRight, Sparkles, Star } from "lucide-react";

const VideoHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about-video");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-studio-dark via-studio-gray-900 to-studio-darker">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-studio-accent-purple/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-studio-accent-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-studio-accent-cyan/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-studio-accent-purple/20 rounded"
              ></div>
            ))}
          </div>
        </div>

        {/* Particles */}
        {mounted &&
          Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-studio-accent-purple/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-studio-accent-purple/10 border border-studio-accent-purple/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-studio-accent-purple" />
            <span className="text-studio-accent-purple font-medium text-sm">
              {/* Premium Video Editing Studio */}
              Ultimate Video Editing Studio
            </span>
            <Sparkles className="w-4 h-4 text-studio-accent-purple" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-orbitron font-black mb-8 leading-none">
            <span className="inline-block bg-gradient-to-r from-studio-accent-purple via-studio-accent-blue to-studio-accent-cyan bg-clip-text text-transparent animate-gradient">
              UXCraft
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">Studio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-studio-gray-300 mb-6 font-space-grotesk font-light">
            Cinematic Video Editing & 3D Animation
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-studio-gray-400 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Transform your vision into stunning visual stories that captivate
            audiences and elevate your brand to new heights
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="group bg-gradient-to-r from-studio-accent-purple to-studio-accent-blue hover:from-studio-accent-blue hover:to-studio-accent-purple text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-studio-accent-purple/25 transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
            >
              Start Your Project
              <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-2 border-studio-accent-purple/50 text-studio-accent-purple hover:bg-studio-accent-purple hover:text-white font-semibold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              onClick={scrollToAbout}
            >
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-studio-accent-purple/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-studio-accent-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
