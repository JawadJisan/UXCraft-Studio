// import { Play, Film, Scissors, Music4, Sparkles } from "lucide-react";
// import { Button } from "./ui/button";

// const Documentary = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-studio-gray-900 to-studio-dark relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-1/4 -left-20 w-80 h-80 bg-studio-accent-purple/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-studio-accent-cyan/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16 space-y-6">
//           <h2 className="section-title animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-studio-gray-200 to-studio-gray-300">
//             Documentary
//           </h2>

//           <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
//             Cinematic storytelling that captivates and informs
//           </p>

//           <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           <div className="lg:col-span-5 space-y-6">
//             <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron">
//               Professional Documentary Editing
//             </h3>

//             <p className="text-studio-gray-300 leading-relaxed">
//               Transform your raw footage into compelling narratives like top
//               creators: James Jani, SunnyV2, Vox, and Magnates Media. We handle
//               the technical complexity so you can focus on storytelling.
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
//                   <Film className="h-5 w-5 text-studio-accent-purple" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Cinematic Narrative</h4>
//                   <p className="text-studio-gray-300 text-sm">
//                     Story-driven editing with dramatic pacing and emotional
//                     impact
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-studio-accent-cyan/10 rounded-lg mt-1">
//                   <Scissors className="h-5 w-5 text-studio-accent-cyan" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Viewer Retention</h4>
//                   <p className="text-studio-gray-300 text-sm">
//                     Optimized pacing and hooks to maximize watch time
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-studio-accent-blue/10 rounded-lg mt-1">
//                   <Music4 className="h-5 w-5 text-studio-accent-blue" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Audio Enhancement</h4>
//                   <p className="text-studio-gray-300 text-sm">
//                     Professional sound design and voiceover processing
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-gradient-to-br from-studio-accent-purple/10 to-studio-accent-cyan/10 rounded-lg mt-1">
//                   <Sparkles className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Visual Polish</h4>
//                   <p className="text-studio-gray-300 text-sm">
//                     Color grading and effects that elevate production value
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <Button className="btn-primary group mt-4 w-full sm:w-auto">
//               <Play className="mr-2 h-4 w-4 group-hover:animate-pulse" />
//               Watch Documentary Sample
//             </Button>
//           </div>

//           <div className="lg:col-span-7 relative group">
//             <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border-2 border-studio-gray-600">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/VCHBTLr1X-0?autoplay=1&mute=1&modestbranding=1&rel=0"
//                 title="Documentary Sample"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>

//             {/* Enhanced Glow Effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-studio-accent-purple/20 via-studio-accent-blue/20 to-studio-accent-cyan/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

//             {/* Play Button Overlay */}
//             {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 border-2 border-white/20">
//                 <Play className="h-12 w-12 text-white" strokeWidth={1.5} />
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="glass-effect p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto border border-studio-gray-700">
//             <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-orbitron">
//               Ready to transform your documentary?
//             </h3>
//             <p className="text-studio-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
//               Let's craft a compelling narrative that resonates with your
//               audience.
//             </p>
//             <Button
//               className="btn-primary inline-flex items-center justify-center group px-6 py-3 text-sm sm:text-base"
//               onClick={() => {
//                 const element = document.getElementById("contact");
//                 if (element) {
//                   element.scrollIntoView({ behavior: "smooth" });
//                 }
//               }}
//             >
//               <span className="flex items-center">
//                 Get Free Quote
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-2 group-hover:translate-x-1 transition-transform"
//                 >
//                   <path d="M5 12h14" />
//                   <path d="m12 5 7 7-7 7" />
//                 </svg>
//               </span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Documentary;

import {
  Film,
  Scissors,
  Music4,
  Sparkles,
  Play,
  Home,
  MapPin,
  Sun,
  Move3D,
  Sparkle,
  Zap,
  Droplets,
  ShoppingCart,
  Dumbbell,
  Users,
  Activity,
  Clock,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Documentary = () => {
  const videoSections = [
    {
      title: "Documentary",
      subtitle: "Cinematic storytelling that captivates and informs",
      description:
        "Transform your raw footage into compelling narratives like top creators: James Jani, SunnyV2, Vox, and Magnates Media. We handle the technical complexity so you can focus on storytelling.",
      features: [
        {
          icon: <Film />,
          title: "Cinematic Narrative",
          description:
            "Story-driven editing with dramatic pacing and emotional impact",
        },
        {
          icon: <Scissors />,
          title: "Viewer Retention",
          description: "Optimized pacing and hooks to maximize watch time",
        },
        {
          icon: <Music4 />,
          title: "Audio Enhancement",
          description: "Professional sound design and voiceover processing",
        },
        {
          icon: <Sparkles />,
          title: "Visual Polish",
          description:
            "Color grading and effects that elevate production value",
        },
      ],
      youtubeId: "VCHBTLr1X-0",
      buttonText: "Watch Documentary Sample",
      alignRight: true,
    },
    {
      title: "Real Estate",
      subtitle: "Showcase properties with cinematic flair",
      description:
        "Highlight unique features and attract potential buyers with compelling narratives that showcase properties in their best light.",
      features: [
        {
          icon: <Home />,
          title: "Property Showcase",
          description: "Highlight key features and unique selling points",
        },
        {
          icon: <MapPin />,
          title: "Location Emphasis",
          description: "Showcase neighborhood and surrounding amenities",
        },
        {
          icon: <Sun />,
          title: "Natural Lighting",
          description: "Optimized footage for day/night transitions",
        },
        {
          icon: <Move3D />,
          title: "Virtual Tours",
          description: "Seamless transitions between spaces",
        },
      ],
      youtubeId: "7RjfudIUaqs",
      buttonText: "View Real Estate Sample",
      alignRight: false,
    },
    {
      title: "Car Wash",
      subtitle: "Dynamic promotional content that drives engagement",
      description:
        "Capture the energy and efficiency of your car wash business with high-impact visuals that convert viewers into customers.",
      features: [
        {
          icon: <Sparkle />,
          title: "Transformation Focus",
          description: "Highlight before/after results dramatically",
        },
        {
          icon: <Zap />,
          title: "High-Energy Editing",
          description: "Fast-paced sequences showing efficiency",
        },
        {
          icon: <Droplets />,
          title: "Water Effects",
          description: "Slow-motion and close-up shots of cleaning",
        },
        {
          icon: <ShoppingCart />,
          title: "Service Packages",
          description: "Clear showcase of tiered offerings",
        },
      ],
      youtubeId: "N_tpEtBooHc",
      buttonText: "Watch Car Wash Sample",
      alignRight: true,
    },
    {
      title: "Gym & Fitness",
      subtitle: "Inspire and motivate potential members",
      description:
        "Showcase your facility, equipment, and community with high-energy edits that convert viewers into members.",
      features: [
        {
          icon: <Dumbbell />,
          title: "Equipment Showcase",
          description: "Highlight quality machines and free weights",
        },
        {
          icon: <Users />,
          title: "Community Focus",
          description: "Show positive interactions between members",
        },
        {
          icon: <Activity />,
          title: "Transformation Stories",
          description: "Feature client success journeys",
        },
        {
          icon: <Clock />,
          title: "24/7 Access",
          description: "Showcase facility at different times",
        },
      ],
      youtubeId: "VPK5O0B6PlY",
      buttonText: "View Gym Sample",
      alignRight: false,
    },
  ];

  return (
    <section className="py-1 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-studio-gray-900 to-studio-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-studio-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-studio-accent-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {videoSections.map((section, index) => (
          <div key={index}>
            <div className="text-center mb-16 space-y-6 mt-24">
              <h2 className="section-title animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-studio-gray-200 to-studio-gray-300">
                {section.title}
              </h2>
              <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
                {section.subtitle}
              </p>
              <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
            </div>

            <div
              className={`grid lg:grid-cols-12 gap-12 items-start ${index < videoSections.length - 1 ? "mb-24" : ""}`}
            >
              {/* Text Content - alternates sides */}
              <div
                className={`lg:col-span-5 space-y-6 ${section.alignRight ? "lg:order-1" : "lg:order-2"}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron">
                  Professional {section.title} Editing
                </h3>
                <p className="text-studio-gray-300 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-4">
                  {section.features.map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-start gap-3">
                      <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
                        {React.cloneElement(feature.icon, {
                          className: "h-5 w-5 text-studio-accent-purple",
                        })}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-studio-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  // href={`https://www.youtube.com/watch?v=${section.youtubeId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const videoUrl = `https://www.youtube.com/watch?v=${section.youtubeId}`;
                    window.open(videoUrl, "_blank");
                  }}
                  className="btn-primary group mt-4 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  {section.buttonText}
                </Button>
              </div>

              {/* Video Player - alternates sides */}
              <div
                className={`lg:col-span-7 relative group ${section.alignRight ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border-2 border-studio-gray-600">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${section.youtubeId}?autoplay=1&mute=1&modestbranding=1&rel=0`}
                    title={`${section.title} Sample`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-studio-accent-purple/20 via-studio-accent-blue/20 to-studio-accent-cyan/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto border border-studio-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-orbitron">
              Ready to transform your content?
            </h3>
            <p className="text-studio-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Let's craft compelling narratives that resonate with your
              audience.
            </p>
            <Button
              className="btn-primary inline-flex items-center justify-center group px-6 py-3 text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="flex items-center">
                Get Free Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentary;
