
import { Card, CardContent } from "./ui/card";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Commercial",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    description: "High-impact commercial video with dynamic transitions and color grading"
  },
  {
    id: 2,
    title: "Product Showcase",
    category: "Product Video",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
    description: "Sleek product demonstration with 3D animations and visual effects"
  },
  {
    id: 3,
    title: "Corporate Story",
    category: "Corporate",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    description: "Professional corporate video with storytelling and brand messaging"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title animate-fade-in">
            Our Portfolio
          </h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
            Showcasing our finest video editing and animation work
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className="group bg-transparent border-studio-gray-700 hover:border-studio-accent-purple/50 card-hover overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button className="btn-primary">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-studio-accent-purple text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white font-orbitron">
                  {item.title}
                </h3>
                
                <p className="text-studio-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                <Button variant="outline" className="btn-secondary w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
