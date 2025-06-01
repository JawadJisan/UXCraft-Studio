// import { Button } from "./ui/button";
// import { Mail, MessageSquare, Award, Users, Clock, Star } from "lucide-react";

// const NameAndInfo = () => {
//   const stats = [
//     { icon: Award, label: "Projects Completed", value: "500+" },
//     { icon: Users, label: "Happy Clients", value: "200+" },
//     { icon: Clock, label: "Years Experience", value: "5+" },
//     { icon: Star, label: "Average Rating", value: "4.9" },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold">
//                 <span className="text-gradient">Professional</span>
//                 <br />
//                 <span className="text-white">Video Editing</span>
//               </h2>

//               <p className="text-xl text-studio-gray-300 font-space-grotesk">
//                 Editing, Color Grading, Effects & Audio Post-Production
//               </p>
//             </div>

//             <div className="space-y-6">
//               <p className="text-lg text-studio-gray-200 leading-relaxed">
//                 Are you a content creator, YouTuber, or brand aiming to elevate
//                 your visual content? At UXCraft Studio, we specialize in
//                 delivering sleek, cinematic video editing and high-quality 3D
//                 animation tailored to your unique style and goals.
//               </p>

//               <p className="text-studio-gray-300 leading-relaxed">
//                 From YouTube intros and social media reels to product animations
//                 and branded content, our team ensures every frame is crafted
//                 with precision, creativity, and storytelling that captivates
//                 your audience.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             {/* <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 className="btn-primary group"
//                 onClick={() => window.open('https://wa.me/+8801986483724', '_blank')}
//               >
//                 <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-bounce" />
//                 WhatsApp Chat
//               </Button>

//               <Button
//                 variant="outline"
//                 className="btn-secondary group"
//                 onClick={() => window.open('mailto:uxcraftstudio936@gmail.com', '_blank')}
//               >
//                 <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
//                 Send Email
//               </Button>
//             </div> */}
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="glass-effect p-6 text-center group hover:bg-white/10 transition-all duration-300 card-hover"
//               >
//                 <stat.icon className="h-8 w-8 text-studio-accent-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                 <div className="text-2xl font-bold font-orbitron text-white mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-studio-gray-400 font-inter">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-20 h-px bg-gradient-to-r from-transparent via-studio-gray-600 to-transparent"></div>
//       </div>
//     </section>
//   );
// };

// export default NameAndInfo;

import { Button } from "./ui/button";
import { Mail, MessageSquare, Award, Users, Clock, Star } from "lucide-react";

const NameAndInfo = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold">
                <span className="text-gradient">Elevate Your</span>
                <br />
                <span className="text-white">Visual Content</span>
              </h2>

              <p className="text-xl text-studio-gray-300 font-space-grotesk">
                Professional Editing & Post-Production Solutions
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-studio-gray-200 leading-relaxed">
                UXCraft Studio partners with creators, influencers, and brands
                to transform their vision into polished, professional content.
                We specialize in understanding your unique style and amplifying
                it through expert editing.
              </p>

              <p className="text-studio-gray-300 leading-relaxed">
                Our comprehensive services range from YouTube packages and
                social media clips to corporate presentations and promotional
                videos. Each project benefits from our signature blend of
                technical expertise and creative storytelling.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect p-6 text-center group hover:bg-white/10 transition-all duration-300 card-hover"
              >
                <stat.icon className="h-8 w-8 text-studio-accent-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold font-orbitron text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-studio-gray-400 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-studio-gray-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default NameAndInfo;
