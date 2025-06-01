// import { useState } from "react";
// import { Play, Volume2, VolumeX } from "lucide-react";

// const reelsData = [
//   {
//     id: 1,
//     title: "Social Media Reel",
//     videoId: "fplTb5A_lmQ",
//     thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop"
//   },
//   {
//     id: 2,
//     title: "Product Demo Reel",
//     videoId: "sF8QmCo_qU4",
//     thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Brand Story Reel",
//     videoId: "3USq5LTjU7g",
//     thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
//   }
// ];

// const Reels = () => {
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);

//   const handleVideoPlay = (id: number) => {
//     setPlayingVideo(playingVideo === id ? null : id);
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="section-title animate-fade-in">
//             Video Reels
//           </h2>
//           <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
//             Short-form content that captures attention and drives engagement
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {reelsData.map((reel) => (
//             <div
//               key={reel.id}
//               className="relative group overflow-hidden rounded-xl aspect-[9/16] bg-studio-gray-800 card-hover"
//             >
//               {playingVideo === reel.id ? (
//                 <iframe
//                   className="w-full h-full"
//                   src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1`}
//                   title={reel.title}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <div
//                   className="relative w-full h-full cursor-pointer"
//                   onClick={() => handleVideoPlay(reel.id)}
//                 >
//                   <img
//                     src={reel.thumbnail}
//                     alt={reel.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white font-semibold font-orbitron text-sm">
//                       {reel.title}
//                     </h3>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reels;

// import { useState, useEffect, useRef } from "react";
// import { Play, Volume2, VolumeX, Eye } from "lucide-react";

// const reelsData = [
//   {
//     id: 1,
//     title: "Social Media Reel",
//     videoId: "fplTb5A_lmQ",
//     thumbnail:
//       "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Brand Story Reel",
//     videoId: "3USq5LTjU7g",
//     thumbnail:
//       "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Product Demo Reel",
//     videoId: "sF8QmCo_qU4",
//     thumbnail:
//       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop",
//   },
// ];

// const Reels = () => {
//   const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//         if (!entry.isIntersecting) {
//           setHoveredVideo(null);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleMouseEnter = (id: number) => {
//     if (isInView) {
//       setHoveredVideo(id);
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredVideo(null);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-studio-dark to-studio-gray-900 relative overflow-hidden"
//     >
//       {/* Background decorations */}
//       <div className="absolute top-10 right-10 w-72 h-72 bg-studio-accent-purple/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-10 w-96 h-96 bg-studio-accent-cyan/5 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16 space-y-6">
//           <div className="inline-flex items-center gap-2 bg-studio-accent-purple/10 px-4 py-2 rounded-full mb-4">
//             <Eye className="h-4 w-4 text-studio-accent-purple" />
//             <span className="text-sm font-medium text-studio-accent-purple uppercase tracking-wider">
//               Video Showcase
//             </span>
//           </div>

//           <h2 className="section-title animate-fade-in">Video Reels</h2>
//           <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk leading-relaxed">
//             Short-form content that captures attention and drives engagement
//             across all platforms
//           </p>

//           <div className="w-24 h-1 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {reelsData.map((reel, index) => (
//             <div
//               key={reel.id}
//               className="relative group overflow-hidden rounded-2xl aspect-[9/14] bg-studio-gray-800 card-hover border border-studio-gray-700/50 hover:border-studio-accent-purple/50 transition-all duration-500"
//               onMouseEnter={() => handleMouseEnter(reel.id)}
//               onMouseLeave={handleMouseLeave}
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               {hoveredVideo === reel.id && isInView ? (
//                 <div className="relative w-full h-full">
//                   <iframe
//                     className="w-full h-full rounded-2xl"
//                     src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${reel.videoId}&modestbranding=1&rel=0&showinfo=0`}
//                     title={reel.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />

//                   {/* Video indicator */}
//                   <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                     LIVE
//                   </div>

//                   {/* Sound indicator */}
//                   <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
//                     <Volume2 className="h-4 w-4 text-white" />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative w-full h-full cursor-pointer group">
//                   <img
//                     src={reel.thumbnail}
//                     alt={reel.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-all duration-300"></div>

//                   {/* Play button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-studio-accent-purple/20 transition-all duration-300 border border-white/20">
//                       <Play
//                         className="h-8 w-8 text-white ml-1"
//                         fill="currentColor"
//                       />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
//                     <h3 className="text-white font-semibold font-orbitron text-sm group-hover:text-studio-accent-cyan transition-colors">
//                       {reel.title}
//                     </h3>
//                     <div className="flex items-center gap-2 text-xs text-studio-gray-300">
//                       <div className="w-2 h-2 bg-studio-accent-green rounded-full"></div>
//                       <span>Hover to preview</span>
//                     </div>
//                   </div>

//                   {/* Hover effect border */}
//                   <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-studio-accent-purple/50 transition-all duration-300"></div>
//                 </div>
//               )}

//               {/* Glow effect */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-studio-accent-purple/20 via-studio-accent-blue/20 to-studio-accent-cyan/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
//             </div>
//           ))}
//         </div>

//         {/* Additional info */}
//         <div className="text-center mt-12">
//           <p className="text-studio-gray-400 text-sm font-space-grotesk">
//             Hover over any reel to preview with sound • Click to view full video
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reels;

import { useState, useEffect, useRef } from "react";
import { Play, Volume2, VolumeX, Eye } from "lucide-react";

const reelsData = [
  {
    id: 1,
    title: "Social Media Reel",
    videoId: "fplTb5A_lmQ",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Brand Story Reel",
    videoId: "3USq5LTjU7g",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Product Demo Reel",
    videoId: "sF8QmCo_qU4",
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop",
  },
];

const Reels = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setHoveredVideo(null);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (isInView) {
      // Set a timeout to prevent janky transitions when quickly hovering
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredVideo(id);
      }, 50); // Small delay for smoother transition
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredVideo(null);
  };

  const handleIframeLoad = (id: number) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-studio-dark to-studio-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-studio-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-studio-accent-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-studio-accent-purple/10 px-4 py-2 rounded-full mb-4">
            <Eye className="h-4 w-4 text-studio-accent-purple" />
            <span className="text-sm font-medium text-studio-accent-purple uppercase tracking-wider">
              Video Showcase
            </span>
          </div>

          <h2 className="section-title animate-fade-in">Video Reels</h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk leading-relaxed">
            Short-form content that captures attention and drives engagement
            across all platforms
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reelsData.map((reel, index) => (
            <div
              key={reel.id}
              className="relative group overflow-hidden rounded-2xl aspect-[9/14] bg-studio-gray-800 card-hover border border-studio-gray-700/50 hover:border-studio-accent-purple/50 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative w-full h-full">
                {/* Thumbnail with smooth transition */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    hoveredVideo === reel.id && isInView
                      ? "opacity-0 scale-105"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-all duration-300"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-studio-accent-purple/20 transition-all duration-300 border border-white/20">
                      <Play
                        className="h-8 w-8 text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                    <h3 className="text-white font-semibold font-orbitron text-sm group-hover:text-studio-accent-cyan transition-colors">
                      {reel.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-studio-gray-300">
                      <div className="w-2 h-2 bg-studio-accent-green rounded-full"></div>
                      <span>Hover to preview</span>
                    </div>
                  </div>
                </div>

                {/* Video iframe with fade-in transition */}
                {hoveredVideo === reel.id && isInView && (
                  <div
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      loadedVideos[reel.id] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${reel.videoId}&modestbranding=1&rel=0&showinfo=0`}
                      title={reel.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleIframeLoad(reel.id)}
                    />

                    {/* Video indicator */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>

                    {/* Sound indicator */}
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Volume2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-studio-accent-purple/50 transition-all duration-300"></div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-studio-accent-purple/20 via-studio-accent-blue/20 to-studio-accent-cyan/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-studio-gray-400 text-sm font-space-grotesk">
            Hover over any reel to preview with sound • Click to view full video
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reels;
