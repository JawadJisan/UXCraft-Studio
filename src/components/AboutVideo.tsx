// import { useState, useEffect, useRef } from "react";
// import { Button } from "./ui/button";
// import {
//   Volume2,
//   VolumeX,
//   Play,
//   Pause,
//   Mail,
//   MessageSquare,
//   Sparkles,
//   Film,
//   Video,
//   Scissors,
//   Music4,
// } from "lucide-react";

// const AboutVideo = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVideoLoaded(true);
//     }, 800);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleMute = () => setIsMuted(!isMuted);
//   const togglePlay = () => setIsPlaying(!isPlaying);

//   return (
//     <section
//       id="about-video"
//       className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-20 -right-20 w-96 h-96 bg-studio-accent-purple/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-40 -left-20 w-80 h-80 bg-studio-accent-cyan/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Video Section */}
//         <div className="relative w-full h-screen group">
//           {isVideoLoaded ? (
//             <>
//               <iframe
//                 ref={iframeRef}
//                 className="w-full h-full object-cover"
//                 src={`https://www.youtube.com/embed/bHfrIEPUpH0?autoplay=1&mute=${
//                   isMuted ? 1 : 0
//                 }&controls=0&loop=1&playlist=bHfrIEPUpH0&modestbranding=1&rel=0&showinfo=0`}
//                 title="UXCraft Studio Showcase"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{ border: "none" }}
//               />

//               {/* Custom Controls Overlay */}
//               <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="bg-black/60 border-white/30 hover:bg-black/80 backdrop-blur-sm"
//                   onClick={togglePlay}
//                 >
//                   {isPlaying ? (
//                     <Pause className="h-5 w-5 text-white" />
//                   ) : (
//                     <Play className="h-5 w-5 text-white" />
//                   )}
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="bg-black/60 border-white/30 hover:bg-black/80 backdrop-blur-sm"
//                   onClick={toggleMute}
//                 >
//                   {isMuted ? (
//                     <VolumeX className="h-5 w-5 text-white" />
//                   ) : (
//                     <Volume2 className="h-5 w-5 text-white" />
//                   )}
//                 </Button>
//               </div>

//               {/* Video Info Overlay */}
//               <div className="absolute bottom-6 left-6 text-white">
//                 <p className="text-sm opacity-80">UXCraft Studio Showcase</p>
//                 <p className="text-xs opacity-60">Professional Video Editing</p>
//               </div>
//             </>
//           ) : (
//             <div className="w-full h-full bg-black flex items-center justify-center">
//               <div className="text-center">
//                 <div className="h-20 w-20 bg-studio-accent-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <Film className="h-8 w-8 text-studio-accent-purple animate-pulse" />
//                 </div>
//                 <p className="text-studio-gray-400 font-space-grotesk">
//                   Loading showcase...
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="space-y-12 mt-16">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center gap-2 bg-studio-accent-blue/10 px-4 py-1.5 rounded-full mb-4">
//               <Sparkles className="h-4 w-4 text-studio-accent-blue" />
//               <span className="text-sm font-medium text-studio-accent-blue uppercase tracking-wider">
//                 Premium Editing
//               </span>
//             </div>

//             <h2 className="section-title animate-fade-in">
//               Professional Video Editing
//             </h2>

//             <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//             <div className="space-y-6">
//               <p className="text-lg text-studio-gray-200 leading-relaxed font-space-grotesk">
//                 Elevate your visual content with our cinematic editing and
//                 motion design expertise. We transform raw footage into
//                 compelling stories that captivate audiences and amplify your
//                 brand.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
//                     <Video className="h-5 w-5 text-studio-accent-purple" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-white">Cinematic Edits</h3>
//                     <p className="text-studio-gray-300 text-sm">
//                       Hollywood-style editing with dramatic pacing and
//                       transitions
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <div className="p-2 bg-studio-accent-cyan/10 rounded-lg mt-1">
//                     <Scissors className="h-5 w-5 text-studio-accent-cyan" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-white">
//                       Social Optimization
//                     </h3>
//                     <p className="text-studio-gray-300 text-sm">
//                       Platform-specific formatting for YouTube, TikTok, and
//                       Instagram
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <p className="text-lg text-studio-gray-200 leading-relaxed font-space-grotesk">
//                 From YouTube creators to global brands, we deliver precision
//                 editing, color grading, and audio post-production that makes
//                 your content stand out in crowded digital spaces.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="p-2 bg-studio-accent-blue/10 rounded-lg mt-1">
//                     <Music4 className="h-5 w-5 text-studio-accent-blue" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-white">Audio Enhancement</h3>
//                     <p className="text-studio-gray-300 text-sm">
//                       Professional sound design, mixing, and voiceover cleanup
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <div className="p-2 bg-gradient-to-br from-studio-accent-purple/10 to-studio-accent-cyan/10 rounded-lg mt-1">
//                     <Sparkles className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-white">Visual Effects</h3>
//                     <p className="text-studio-gray-300 text-sm">
//                       Motion graphics, transitions, and SFX integration
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="mt-10 text-center">
//             <div className="inline-flex flex-col sm:flex-row gap-4">
//               <Button
//                 className="btn-primary group"
//                 onClick={() =>
//                   window.open("https://wa.me/+8801986483724", "_blank")
//                 }
//               >
//                 <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
//                 WhatsApp Chat
//               </Button>

//               <Button
//                 variant="outline"
//                 className="btn-secondary group"
//                 onClick={() =>
//                   window.open("mailto:uxcraftstudio936@gmail.com", "_blank")
//                 }
//               >
//                 <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
//                 Send Email
//               </Button>
//             </div>

//             <p className="mt-4 text-studio-gray-400 text-sm max-w-md mx-auto">
//               Response time: under 2 hours during business days
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-20 h-px bg-gradient-to-r from-transparent via-studio-gray-600 to-transparent"></div>
//       </div>
//     </section>
//   );
// };

// export default AboutVideo;

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Mail,
  MessageSquare,
  Sparkles,
  Film,
  Video,
  Scissors,
  Music4,
} from "lucide-react";

const AboutVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section
      id="about-video"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-studio-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-studio-accent-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Video Section */}
        <div className="relative w-full h-screen group">
          {isVideoLoaded ? (
            <>
              <iframe
                ref={iframeRef}
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/bHfrIEPUpH0?autoplay=1&mute=${
                  isMuted ? 1 : 0
                }&controls=0&loop=1&playlist=bHfrIEPUpH0&modestbranding=1&rel=0&showinfo=0`}
                title="UXCraft Studio Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />

              {/* Custom Controls Overlay */}
              <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/60 border-white/30 hover:bg-black/80 backdrop-blur-sm"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/60 border-white/30 hover:bg-black/80 backdrop-blur-sm"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </Button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-80">UXCraft Studio Showcase</p>
                <p className="text-xs opacity-60">Professional Video Editing</p>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 bg-studio-accent-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Film className="h-8 w-8 text-studio-accent-purple animate-pulse" />
                </div>
                <p className="text-studio-gray-400 font-space-grotesk">
                  Loading showcase...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-12 mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-studio-accent-blue/10 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-studio-accent-blue" />
              <span className="text-sm font-medium text-studio-accent-blue uppercase tracking-wider">
                Our Showcase
              </span>
            </div>

            <h2 className="section-title animate-fade-in">
              Crafting Visual Stories
            </h2>

            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-studio-gray-200 leading-relaxed font-space-grotesk">
                Experience our signature editing style that transforms raw
                footage into cinematic masterpieces. Every project receives
                meticulous attention to pacing, composition, and visual rhythm.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
                    <Video className="h-5 w-5 text-studio-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Cinematic Flow</h3>
                    <p className="text-studio-gray-300 text-sm">
                      Expert pacing and sequencing for maximum emotional impact
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-studio-accent-cyan/10 rounded-lg mt-1">
                    <Scissors className="h-5 w-5 text-studio-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      Platform Optimization
                    </h3>
                    <p className="text-studio-gray-300 text-sm">
                      Formatting for YouTube, TikTok, Instagram & Shorts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-studio-gray-200 leading-relaxed font-space-grotesk">
                Our editing philosophy blends technical precision with artistic
                vision. We specialize in creating content that maintains viewer
                engagement from first frame to last.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-studio-accent-blue/10 rounded-lg mt-1">
                    <Music4 className="h-5 w-5 text-studio-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Audio Precision</h3>
                    <p className="text-studio-gray-300 text-sm">
                      Crystal-clear sound design and seamless audio integration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-studio-accent-purple/10 to-studio-accent-cyan/10 rounded-lg mt-1">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      Dynamic Transitions
                    </h3>
                    <p className="text-studio-gray-300 text-sm">
                      Custom motion graphics and seamless visual effects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-primary group"
                onClick={() =>
                  window.open("https://wa.me/+8801986483724", "_blank")
                }
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                WhatsApp Chat
              </Button>

              <Button
                variant="outline"
                className="btn-secondary group"
                onClick={() =>
                  window.open("mailto:uxcraftstudio936@gmail.com", "_blank")
                }
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Send Email
              </Button>
            </div>

            <p className="mt-4 text-studio-gray-400 text-sm max-w-md mx-auto">
              Response time: under 2 hours during business days
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-studio-gray-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default AboutVideo;
