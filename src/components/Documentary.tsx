// import { Play } from "lucide-react";
// import { Button } from "./ui/button";

// const Documentary = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="section-title animate-fade-in">Documentary</h2>
//           <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
//             Cinematic storytelling that captivates and informs
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-white font-orbitron">
//               Professional Documentary Editing
//             </h3>

//             <p className="text-studio-gray-300 leading-relaxed">
//               Do you want to make documentary-style videos just like James Jani,
//               SunnyV2, Vox, Jake Tran, Iman Gadzhi, and Magnates Media, but you
//               don't have the tools and are willing to hire a professional?
//             </p>

//             <p className="text-studio-gray-300 leading-relaxed">
//               If you are creating videos and uploading them to your channel, but
//               your videos are not getting views, there might be some problem
//               with the editing style. We will provide you with HD
//               documentary-style video editing for all social networking
//               platforms.
//             </p>

//             <p className="text-studio-gray-300 leading-relaxed">
//               We'll take away all of the pain so you can focus on creating an
//               excellent script. We'll make sure that no matter what your video
//               project is, it's fully optimized and perfectly represented.
//             </p>

//             <Button className="btn-primary">
//               <Play className="mr-2 h-4 w-4" />
//               Watch Documentary Sample
//             </Button>
//           </div>

//           <div className="relative">
//             <div className="relative aspect-video rounded-xl overflow-hidden glass-effect">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/VCHBTLr1X-0"
//                 title="Documentary Sample"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>

//             <div className="absolute -inset-4 bg-gradient-studio opacity-20 rounded-xl blur-xl -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Documentary;

/* -------------- */

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
//           {/* <div className="inline-flex items-center gap-2 bg-studio-accent-blue/10 px-4 py-1.5 rounded-full">
//             <Film className="h-4 w-4 text-studio-accent-blue" />
//             <span className="text-sm font-medium text-studio-accent-blue uppercase tracking-wider">
//               Cinematic Storytelling
//             </span>
//           </div> */}

//           {/* <h2 className="section-title animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-studio-gray-200 to-studio-gray-300">
//             Documentary
//           </h2> */}
//           <h2 className="section-title animate-fade-in">Documentary</h2>

//           <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
//             Cinematic storytelling that captivates and informs
//           </p>

//           <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <h3 className="text-3xl md:text-4xl font-bold text-white font-orbitron">
//               Professional Documentary Editing
//             </h3>

//             <p className="text-studio-gray-300 leading-relaxed text-lg">
//               Transform your raw footage into compelling narratives like top
//               creators: James Jani, SunnyV2, Vox, and Magnates Media. We handle
//               the technical complexity so you can focus on storytelling.
//             </p>

//             <div className="space-y-5">
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
//                   <Film className="h-5 w-5 text-studio-accent-purple" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white text-lg">
//                     Cinematic Narrative
//                   </h4>
//                   <p className="text-studio-gray-300">
//                     Story-driven editing with dramatic pacing and emotional
//                     impact
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-studio-accent-cyan/10 rounded-lg mt-1">
//                   <Scissors className="h-5 w-5 text-studio-accent-cyan" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white text-lg">
//                     Viewer Retention
//                   </h4>
//                   <p className="text-studio-gray-300">
//                     Optimized pacing and hooks to maximize watch time and
//                     engagement
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-studio-accent-blue/10 rounded-lg mt-1">
//                   <Music4 className="h-5 w-5 text-studio-accent-blue" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white text-lg">
//                     Audio Enhancement
//                   </h4>
//                   <p className="text-studio-gray-300">
//                     Professional sound design and voiceover processing
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-gradient-to-br from-studio-accent-purple/10 to-studio-accent-cyan/10 rounded-lg mt-1">
//                   <Sparkles className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white text-lg">
//                     Visual Polish
//                   </h4>
//                   <p className="text-studio-gray-300">
//                     Color grading and effects that elevate production value
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* <Button className="btn-primary group mt-4">
//               <Play className="mr-2 h-4 w-4 group-hover:animate-pulse" />
//               Watch Documentary Sample
//             </Button> */}
//           </div>

//           <div className="relative group">
//             <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border border-studio-gray-700">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/VCHBTLr1X-0"
//                 title="Documentary Sample"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>

//             {/* Glow Effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-studio-accent-purple/20 via-studio-accent-blue/20 to-studio-accent-cyan/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto border border-studio-gray-700">
//             <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
//               Ready to transform your documentary?
//             </h3>
//             <p className="text-studio-gray-300 mb-6">
//               Let's craft a compelling narrative that resonates with your
//               audience.
//             </p>
//             <Button
//               className="btn-primary inline-flex items-center justify-center group"
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

/* ---------- */
import { Play, Film, Scissors, Music4, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Documentary = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-studio-gray-900 to-studio-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-studio-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-studio-accent-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="section-title animate-fade-in">Documentary</h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
            Cinematic storytelling that captivates and informs
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white font-orbitron">
              Professional Documentary Editing
            </h3>

            <p className="text-studio-gray-300 leading-relaxed text-lg">
              Transform your raw footage into compelling narratives like top
              creators: James Jani, SunnyV2, Vox, and Magnates Media. We handle
              the technical complexity so you can focus on storytelling.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-studio-accent-purple/10 rounded-lg mt-1">
                  <Film className="h-5 w-5 text-studio-accent-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Cinematic Narrative
                  </h4>
                  <p className="text-studio-gray-300">
                    Story-driven editing with dramatic pacing and emotional
                    impact
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-studio-accent-cyan/10 rounded-lg mt-1">
                  <Scissors className="h-5 w-5 text-studio-accent-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Viewer Retention
                  </h4>
                  <p className="text-studio-gray-300">
                    Optimized pacing and hooks to maximize watch time and
                    engagement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-studio-accent-blue/10 rounded-lg mt-1">
                  <Music4 className="h-5 w-5 text-studio-accent-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Audio Enhancement
                  </h4>
                  <p className="text-studio-gray-300">
                    Professional sound design and voiceover processing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-studio-accent-purple/10 to-studio-accent-cyan/10 rounded-lg mt-1">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Visual Polish
                  </h4>
                  <p className="text-studio-gray-300">
                    Color grading and effects that elevate production value
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Video Section */}
          <div className="relative group bg-red-700">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border-2 border-studio-gray-600 hover:border-studio-accent-purple transition-all duration-500">
              <iframe
                className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                src="https://www.youtube.com/embed/VCHBTLr1X-0"
                title="Documentary Sample"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-5 bg-gradient-to-r from-studio-accent-purple/30 via-studio-accent-blue/20 to-studio-accent-cyan/30 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 -z-10"></div>

            {/* Play Indicator */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              PLAYING SAMPLE
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto border border-studio-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Ready to transform your documentary?
            </h3>
            <p className="text-studio-gray-300 mb-6">
              Let's craft a compelling narrative that resonates with your
              audience.
            </p>
            <Button
              className="btn-primary inline-flex items-center justify-center group px-8 py-6 text-lg"
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
