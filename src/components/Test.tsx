import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Mail,
  MessageCircle,
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
    <section id="about-video" className="bg-black text-white">
      {/* Video Section - Full Width/Height */}
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

      {/* Content Section - Below Video */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Title Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Side - Title */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-orbitron font-bold">
                <span className="text-red-500">UXCraft</span>
                <br />
                <span className="text-orange-400">Studio</span>
              </h1>
              <p className="text-xl text-gray-300 mt-4 font-space-grotesk">
                Professional Editing, Color, Effects and Audio Post!
              </p>

              {/* Download/Contact Buttons */}
              <div className="flex flex-col gap-3 mt-8">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3"
                  onClick={() =>
                    window.open("https://wa.me/+8801986483724", "_blank")
                  }
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Chat
                </Button>

                <Button
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3"
                  onClick={() =>
                    window.open("mailto:uxcraftstudio936@gmail.com", "_blank")
                  }
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Are you a content creator, YouTuber, or brand aiming to elevate
                your visual content and stand out in a crowded digital space?
              </p>

              <p className="text-gray-400 leading-relaxed">
                At UXCraft Studio, we specialize in delivering sleek, cinematic
                video editing and high-quality 3D animation tailored to your
                unique style and goals. From YouTube intros and social media
                reels to product animations and branded content, our team
                ensures every frame is crafted with precision, creativity, and
                storytelling that captivates your audience and strengthens your
                brand presence.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Our professional editing suite combines cutting-edge technology
                with creative expertise. We handle everything from color
                correction and visual effects to motion graphics and audio
                post-production, ensuring your content meets the highest
                industry standards while maintaining your unique creative
                vision.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Video className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-white mb-2">Video Editing</h3>
              <p className="text-gray-400 text-sm">
                Professional cuts, transitions, and storytelling
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Sparkles className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-bold text-white mb-2">Color Grading</h3>
              <p className="text-gray-400 text-sm">
                Cinematic color correction and visual enhancement
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Scissors className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-white mb-2">Motion Graphics</h3>
              <p className="text-gray-400 text-sm">
                Dynamic animations and visual effects
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Music4 className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-bold text-white mb-2">Audio Post</h3>
              <p className="text-gray-400 text-sm">
                Sound design, mixing, and enhancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
