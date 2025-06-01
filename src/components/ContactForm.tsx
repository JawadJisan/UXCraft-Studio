import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Using Formspree for email submission (free service)
      const response = await fetch("https://formspree.io/f/xanjwgjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          _subject: "New Project Request from UXCraft Studio Website",
        }),
      });
      console.log("Form submission response:", response);

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again or contact us directly."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-studio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="section-title">Start Your Project</h2>
          <p className="text-xl text-studio-gray-300 max-w-2xl mx-auto font-space-grotesk">
            Ready to bring your vision to life? Let's discuss your project and
            create something amazing together.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-studio-accent-purple to-studio-accent-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">
                Get In Touch
              </h3>
              <p className="text-studio-gray-300 mb-8">
                We're here to help bring your creative vision to life. Reach out
                to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-studio-accent-purple/10 rounded-lg flex items-center justify-center mt-1">
                  <Mail className="h-5 w-5 text-studio-accent-purple" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-studio-gray-400">
                    uxcraftstudio936@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-studio-accent-blue/10 rounded-lg flex items-center justify-center mt-1">
                  <MessageSquare className="h-5 w-5 text-studio-accent-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                  <p className="text-studio-gray-400">+880 1986 483724</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-studio-accent-cyan/10 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="h-5 w-5 text-studio-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-studio-gray-400">
                    {/* Remote Studio Worldwide */}
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="btn-primary w-full group"
                onClick={() =>
                  window.open("https://wa.me/+8801986483724", "_blank")
                }
              >
                <MessageSquare className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                WhatsApp Chat
              </Button>

              <Button
                variant="outline"
                className="btn-secondary w-full group"
                onClick={() =>
                  window.open("mailto:uxcraftstudio936@gmail.com", "_blank")
                }
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-studio-gray-900 border-studio-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-white">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Company/Channel Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all"
                      placeholder="Your company or channel name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
                      >
                        <option value="">Select project type</option>
                        <option value="youtube">YouTube Video</option>
                        <option value="social-media">
                          Social Media Content
                        </option>
                        <option value="commercial">Commercial/Ad</option>
                        <option value="documentary">Documentary</option>
                        <option value="corporate">Corporate Video</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="rush">Rush (1-3 days)</option>
                      <option value="standard">Standard (1 week)</option>
                      <option value="extended">Extended (2-3 weeks)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your project, vision, target audience, and any specific requirements..."
                    ></textarea>
                  </div>

                  {/* Status messages */}
                  {submitSuccess && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
                      Thank you! Your message has been sent. We'll contact you
                      within 24 hours.
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="btn-primary w-full text-lg py-4 group mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        Send Project Request
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
