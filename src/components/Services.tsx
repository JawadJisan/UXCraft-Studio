import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Volume2, Wand2, MoveRight } from "lucide-react";

const services = [
  {
    title: "Video Editing",
    subtitle: "EDIT",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    icon: MoveRight,
    description:
      "Professional video editing with seamless transitions, dynamic cuts, and storytelling expertise",
    features: [
      "Timeline Editing",
      "Transitions",
      "Text Animation",
      "Speed Ramping",
    ],
  },
  {
    title: "Color Grading",
    subtitle: "COLOR",
    color: "from-orange-500 to-red-500",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    icon: Wand2,
    description:
      "Cinematic color correction and grading to enhance mood and visual appeal",
    features: [
      "Color Correction",
      "LUT Application",
      "Mood Enhancement",
      "Skin Tone Balance",
    ],
  },
  {
    title: "Audio Post",
    subtitle: "FAIRLIGHT",
    color: "from-teal-500 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    icon: Volume2,
    description:
      "Professional audio mixing, sound design, and spatial audio implementation",
    features: ["Audio Mixing", "Sound Design", "Noise Reduction", "Music Sync"],
  },
  {
    title: "VFX & Motion",
    subtitle: "FUSION",
    color: "from-purple-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    icon: Sparkles,
    description:
      "Advanced visual effects, motion graphics, and 3D animation integration",
    features: [
      "Motion Graphics",
      "3D Animation",
      "Compositing",
      "Visual Effects",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title animate-fade-in">Our Services</h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
            Comprehensive video production services to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-transparent border-studio-gray-700 hover:border-studio-accent-purple/50 card-hover overflow-hidden"
            >
              {/* Header */}
              <div
                className={`h-12 bg-gradient-to-r ${service.color} flex items-center justify-center`}
              >
                <h3 className="text-white font-orbitron font-bold text-lg tracking-wider">
                  {service.subtitle}
                </h3>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <service.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-white font-orbitron">
                  {service.title}
                </h4>

                <p className="text-studio-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-studio-accent-purple rounded-full mr-2"></div>
                      <span className="text-studio-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Ready to elevate your content?
            </h3>
            <p className="text-studio-gray-300 mb-6">
              Let's discuss your project and bring your vision to life with our professional video editing services.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Free Quote
              <MoveRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div> */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Ready to elevate your content?
            </h3>
            <p className="text-studio-gray-300 mb-6">
              Let's discuss your project and bring your vision to life with our
              professional video editing services.
            </p>
            <Button
              className="btn-primary inline-flex items-center justify-center"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="flex items-center">
                Get Free Quote
                <MoveRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-studio-gray-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Services;
