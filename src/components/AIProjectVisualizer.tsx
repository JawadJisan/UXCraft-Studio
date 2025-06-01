import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sparkles, Wand2, Zap, Brain } from "lucide-react";

const AIProjectVisualizer = () => {
  const [projectData, setProjectData] = useState({
    projectType: "",
    targetAudience: "",
    mood: "",
    description: "",
  });
  const [suggestions, setSuggestions] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const generateSuggestions = () => {
    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      const mockSuggestions = {
        editingStyle: getEditingStyle(
          projectData.projectType,
          projectData.mood
        ),
        colorPalette: getColorPalette(projectData.mood),
        transitions: getTransitions(projectData.projectType),
        musicStyle: getMusicStyle(projectData.mood, projectData.targetAudience),
        effects: getEffects(projectData.projectType),
        pacing: getPacing(projectData.targetAudience, projectData.projectType),
      };

      setSuggestions(mockSuggestions);
      setIsGenerating(false);
    }, 2000);
  };

  const getEditingStyle = (type: string, mood: string) => {
    const styles = {
      youtube:
        "Fast-paced with dynamic cuts, engaging hooks in first 15 seconds",
      commercial: "Cinematic storytelling with brand-focused messaging",
      documentary:
        "Narrative-driven with smooth transitions and emotional pacing",
      "social-media":
        "Quick cuts, vertical format optimized, attention-grabbing",
    };
    return (
      styles[type as keyof typeof styles] ||
      "Dynamic and engaging editing style"
    );
  };

  const getColorPalette = (mood: string) => {
    const palettes = {
      energetic: ["#FF6B35", "#F7931E", "#FFD700", "#FF4081"],
      professional: ["#2E3440", "#5E81AC", "#88C999", "#ECEFF4"],
      cinematic: ["#1B1B1B", "#8B5A2B", "#D4AF37", "#2F4F4F"],
      modern: ["#0066CC", "#00CC99", "#FF6600", "#9933FF"],
    };
    return (
      palettes[mood as keyof typeof palettes] || [
        "#8B5CF6",
        "#3B82F6",
        "#10B981",
        "#F59E0B",
      ]
    );
  };

  const getTransitions = (type: string) => {
    const transitions = {
      youtube: ["Quick cuts", "Zoom transitions", "Wipe effects", "Jump cuts"],
      commercial: [
        "Smooth fades",
        "Cinematic wipes",
        "Morphing",
        "Cross dissolve",
      ],
      documentary: [
        "Gentle fades",
        "Crossfade",
        "Slow zoom",
        "Pan transitions",
      ],
      "social-media": [
        "Quick cuts",
        "Glitch effects",
        "Swipe transitions",
        "Pop effects",
      ],
    };
    return (
      transitions[type as keyof typeof transitions] || [
        "Smooth transitions",
        "Dynamic cuts",
      ]
    );
  };

  const getMusicStyle = (mood: string, audience: string) => {
    return `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${
      audience === "young-adults" ? "contemporary" : "sophisticated"
    } soundtrack with strategic audio peaks`;
  };

  const getEffects = (type: string) => {
    const effects = {
      youtube: [
        "Text animations",
        "Progress bars",
        "Highlight effects",
        "Social media elements",
      ],
      commercial: [
        "Motion graphics",
        "Logo animations",
        "Product highlights",
        "Call-to-action overlays",
      ],
      documentary: [
        "Subtle text overlays",
        "Timeline graphics",
        "Map animations",
        "Interview graphics",
      ],
      "social-media": [
        "Trending effects",
        "Text overlays",
        "Emoji animations",
        "Progress indicators",
      ],
    };
    return (
      effects[type as keyof typeof effects] || [
        "Professional effects",
        "Engaging graphics",
      ]
    );
  };

  const getPacing = (audience: string, type: string) => {
    if (audience === "teens" || type === "social-media")
      return "Fast-paced (0.5-2 second cuts)";
    if (type === "documentary") return "Slow-paced (3-8 second cuts)";
    return "Medium-paced (1.5-4 second cuts)";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-studio-accent-purple" />
            <h2 className="section-title animate-fade-in">
              AI Project Visualizer
            </h2>
          </div>
          <p className="text-xl text-studio-gray-300 max-w-3xl mx-auto font-space-grotesk">
            Let our AI suggest the perfect editing style, effects, and approach
            for your project based on your goals and target audience
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
        <div className="grid lg:grid-cols-2 gap-12 h-screen">
          {/* Input Form */}
          {/* <div className=" justify-center "> */}
            <Card className="bg-transparent border-studio-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-white flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-studio-accent-purple" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={projectData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-600 rounded-lg text-white focus:border-studio-accent-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="youtube">YouTube Video</option>
                    <option value="social-media">Social Media Content</option>
                    <option value="commercial">Commercial/Advertisement</option>
                    <option value="documentary">Documentary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Target Audience
                  </label>
                  <select
                    name="targetAudience"
                    value={projectData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-600 rounded-lg text-white focus:border-studio-accent-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select target audience</option>
                    <option value="teens">Teens (13-17)</option>
                    <option value="young-adults">Young Adults (18-25)</option>
                    <option value="adults">Adults (26-40)</option>
                    <option value="professionals">Professionals (30+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Desired Mood
                  </label>
                  <select
                    name="mood"
                    value={projectData.mood}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-600 rounded-lg text-white focus:border-studio-accent-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select mood</option>
                    <option value="energetic">Energetic & Dynamic</option>
                    <option value="professional">Professional & Clean</option>
                    <option value="cinematic">Cinematic & Dramatic</option>
                    <option value="modern">Modern & Trendy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={projectData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-600 rounded-lg text-white focus:border-studio-accent-purple focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project goals, message, and vision..."
                  ></textarea>
                </div>

                <Button
                  onClick={generateSuggestions}
                  disabled={
                    !projectData.projectType ||
                    !projectData.targetAudience ||
                    !projectData.mood ||
                    isGenerating
                  }
                  className="btn-primary w-full"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      Generating AI Suggestions...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate AI Suggestions
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          {/* </div> */}

          {/* AI Suggestions */}
          {/* <div className="space-y-6"> */}
          <div className="flex items-center justify-center h-full">
            {!suggestions && !isGenerating && (
              <Card className="bg-transparent border-studio-gray-700 border-dashed">
                <CardContent className="p-12 text-center">
                  <Zap className="h-16 w-16 text-studio-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-orbitron text-studio-gray-400 mb-2">
                    AI Waiting
                  </h3>
                  <p className="text-studio-gray-500">
                    Fill out the project details to get personalized suggestions
                  </p>
                </CardContent>
              </Card>
            )}

            {isGenerating && (
              <Card className="bg-transparent border-studio-accent-purple">
                <CardContent className="p-12 text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-studio-accent-purple mx-auto mb-4"></div>
                  <h3 className="text-xl font-orbitron text-white mb-2">
                    AI Processing
                  </h3>
                  <p className="text-studio-gray-300">
                    Analyzing your project requirements...
                  </p>
                </CardContent>
              </Card>
            )}

            {suggestions && (
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron text-white mb-6">
                  AI Recommendations
                </h3>

                <Card className="bg-transparent border-studio-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-studio-accent-purple mb-3">
                      Editing Style
                    </h4>
                    <p className="text-studio-gray-300">
                      {suggestions.editingStyle}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-studio-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-studio-accent-purple mb-3">
                      Color Palette
                    </h4>
                    <div className="flex space-x-3 mb-3">
                      {suggestions.colorPalette.map(
                        (color: string, index: number) => (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-white/20"
                            style={{ backgroundColor: color }}
                          ></div>
                        )
                      )}
                    </div>
                    <p className="text-studio-gray-300 text-sm">
                      Optimized color scheme for your project mood
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-studio-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-studio-accent-purple mb-3">
                      Transitions & Effects
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {suggestions.transitions.map(
                        (transition: string, index: number) => (
                          <span
                            key={index}
                            className="text-sm bg-studio-gray-800 px-2 py-1 rounded text-white"
                          >
                            {transition}
                          </span>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-studio-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-studio-accent-purple mb-3">
                      Pacing & Music
                    </h4>
                    <p className="text-studio-gray-300 mb-2">
                      <strong>Pacing:</strong> {suggestions.pacing}
                    </p>
                    <p className="text-studio-gray-300">
                      <strong>Music:</strong> {suggestions.musicStyle}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProjectVisualizer;
