import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "YouTube Creator",
    company: "TechReview Channel",
    content:
      "UXCraft Studio transformed my YouTube channel completely. Their editing style is exactly what I needed to stand out. My videos now have a cinematic quality that keeps viewers engaged.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Brand Manager",
    company: "InnovateTech Solutions",
    content:
      "Working with UXCraft Studio was a game-changer for our product launches. Their attention to detail and ability to capture our brand essence is unmatched. Highly recommend!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Lifestyle Vlogs",
    content:
      "The team at UXCraft Studio understands storytelling like no other. They took my raw footage and created something magical. My engagement rates have increased by 300%!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  // {
  //   id: 4,
  //   name: "David Thompson",
  //   role: "Marketing Director",
  //   company: "FitLife Brands",
  //   content: "Professional, creative, and reliable. UXCraft Studio delivered our commercial campaign ahead of schedule and exceeded all expectations. The results speak for themselves.",
  //   rating: 5,
  //   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  // },
  // {
  //   id: 5,
  //   name: "Lisa Wang",
  //   role: "Documentary Filmmaker",
  //   company: "Independent Producer",
  //   content: "Their documentary editing skills are phenomenal. They helped me tell my story in a way that resonated with audiences worldwide. The color grading and audio work were exceptional.",
  //   rating: 5,
  //   avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
  // },
  // {
  //   id: 6,
  //   name: "James Wilson",
  //   role: "Business Owner",
  //   company: "Wilson Enterprises",
  //   content: "From concept to final delivery, UXCraft Studio was professional and creative. They turned our vision into a compelling brand video that has driven significant business growth.",
  //   rating: 5,
  //   avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop"
  // }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
            Don't just take our word for it - hear from the creators and brands
            we've helped succeed
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient font-orbitron mb-2">
              {/* 200+ */}
              50+
            </div>
            <div className="text-studio-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient font-orbitron mb-2">
              70+
            </div>
            <div className="text-studio-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient font-orbitron mb-2">
              4.2
            </div>
            <div className="text-studio-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient font-orbitron mb-2">
              96%
            </div>
            <div className="text-studio-gray-400">Client Satisfaction</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-transparent border-studio-gray-700 hover:border-studio-accent-purple/50 card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-studio-accent-purple mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-studio-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold font-orbitron">
                      {testimonial.name}
                    </h4>
                    <p className="text-studio-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-studio-accent-purple text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
