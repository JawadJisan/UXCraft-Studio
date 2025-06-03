import { Card, CardContent } from "./ui/card";
import { Users, Award, Clock, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "Lead Video Editor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    experience: "8+ years",
  },
  {
    name: "Sarah Chen",
    role: "Motion Graphics Designer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    experience: "6+ years",
  },
  {
    name: "Marcus Johnson",
    role: "Color Grading Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    experience: "10+ years",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every frame crafted with meticulous attention to detail",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering award-quality content that exceeds expectations",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery without compromising on quality",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title animate-fade-in">
            About UXCraft Studio
          </h2>
          <p className="text-xl text-studio-gray-300 max-w-3xl mx-auto font-space-grotesk">
            We are a passionate team of video professionals dedicated to
            transforming your vision into captivating visual stories
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 font-orbitron">
              Our Story
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-studio-gray-300">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Founded in 2021, UXCraft Studio emerged from a simple belief:
                  every story deserves to be told with impact. What started as a
                  small team of passionate editors has grown into a full-service
                  video production studio serving clients worldwide.
                </p>
                <p className="leading-relaxed">
                  Our journey began when we recognized the gap between creative
                  vision and technical execution in the digital content space.
                  We set out to bridge that gap with cutting-edge editing
                  techniques and a deep understanding of storytelling.
                </p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Today, we've completed over 500 projects, ranging from YouTube
                  content and social media campaigns to corporate documentaries
                  and commercial productions. Our work has been featured across
                  major platforms and has helped our clients achieve millions of
                  views.
                </p>
                <p className="leading-relaxed">
                  We believe in the power of collaboration, innovation, and
                  relentless pursuit of perfection. Every project is an
                  opportunity to push creative boundaries and deliver something
                  extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">
            Meet Our Team
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-transparent border-studio-gray-700 hover:border-studio-accent-purple/50 card-hover"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-studio opacity-20"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-orbitron">
                    {member.name}
                  </h4>
                  <p className="text-studio-accent-purple font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-studio-gray-400 text-sm">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">
            Our Values
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect p-6 text-center card-hover"
              >
                <value.icon className="h-12 w-12 text-studio-accent-purple mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2 font-orbitron">
                  {value.title}
                </h4>
                <p className="text-studio-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
