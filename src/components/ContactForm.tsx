import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Resend } from "resend";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "", // Will store either dropdown value or custom amount
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // For custom budget input, prefix with "custom:"
    const finalValue = name === "customBudget" ? `custom:${value}` : value;

    setFormData({
      ...formData,
      // Map customBudget to budget field, others to their own fields
      [name === "customBudget" ? "budget" : name]: finalValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    console.log("Form data before submission:", formData);
    // return;

    try {
      // Generate the email content (same as before)
      const projectDetails = `
      <div style="margin-bottom: 24px;">
        <h3 style="color: #6B46C1; border-bottom: 1px solid #E9D8FD; padding-bottom: 8px; margin-bottom: 16px;">
          Project Details
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; width: 30%; color: #4A5568; font-weight: 500;">Name</td>
            <td style="padding: 8px;">${formData.name}</td>
          </tr>
          <tr style="background-color: #F8FAFC;">
            <td style="padding: 8px; color: #4A5568; font-weight: 500;">Email</td>
            <td style="padding: 8px;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #4A5568; font-weight: 500;">Company/Channel</td>
            <td style="padding: 8px;">${formData.company || "N/A"}</td>
          </tr>
          <tr style="background-color: #F8FAFC;">
            <td style="padding: 8px; color: #4A5568; font-weight: 500;">Project Type</td>
            <td style="padding: 8px;">${formData.projectType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #4A5568; font-weight: 500;">Budget Range</td>
            <td style="padding: 8px;">${formData.budget || "Not specified"}</td>
          </tr>
          <tr style="background-color: #F8FAFC;">
            <td style="padding: 8px; color: #4A5568; font-weight: 500;">Timeline</td>
            <td style="padding: 8px;">${formData.timeline || "Flexible"}</td>
          </tr>
        </table>
      </div>
    `;

      const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 24px; background-color: #FFFFFF; }
          .header { background-color: #6B46C1; padding: 32px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 32px; color: #4A5568; line-height: 1.6; }
          .footer { text-align: center; padding: 24px; color: #718096; font-size: 14px; }
          .message-box { background-color: #F8FAFC; padding: 16px; border-radius: 8px; margin-top: 24px; }
          .btn { display: inline-block; background-color: #6B46C1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Project Request</h1>
            <p style="color: #E9D8FD; margin-top: 8px; font-size: 16px;">UXCraft Studio Website</p>
          </div>
          
          <div class="content">
            <h2 style="color: #2D3748; margin-top: 0;">Hello UXCraft Team,</h2>
            <p>A new project request has been submitted through the website:</p>
            
            ${projectDetails}
            
            <h3 style="color: #6B46C1; margin-bottom: 16px;">Project Description</h3>
            <div class="message-box">
              <p style="margin: 0;">${formData.message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${formData.email}" class="btn" style="color: white;">Reply to Client</a>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from UXCraft Studio contact form</p>
            <p style="margin-top: 8px;">© ${new Date().getFullYear()} UXCraft Studio. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

      const textContent = `
      New Project Request - UXCraft Studio
      =====================================
      
      Name: ${formData.name}
      Email: ${formData.email}
      Company/Channel: ${formData.company || "N/A"}
      Project Type: ${formData.projectType}
      Budget Range: ${formData.budget || "Not specified"}
      Timeline: ${formData.timeline || "Flexible"}
      
      Project Description:
      ${formData.message}
      
      --
      Sent from UXCraft Studio contact form
      © ${new Date().getFullYear()} UXCraft Studio
    `;

      // Send email via backend proxy
      // const response = await fetch("http://localhost:3001/api/send-email", {
      const response = await fetch(
        "https://ux-craft-studio-backend.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            // from: "onboarding@resend.dev",
            from: "UXCraft Studio <contact@uxcraftstudio.com>",
            // to: ["jisan.sc@gmail.com"],
            // to: ["contact@uxcraftstudio.com"],
            to: ["uxcraftstudio936@gmail.com"],
            reply_to: formData.email,
            subject: `New Project Request: ${formData.name} - ${formData.projectType}`,
            html: emailHtml,
            text: textContent,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.error?.message ||
            `Email sending failed with status ${response.status}`
        );
      }

      console.log("Email sent:", responseData);
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
    } catch (error) {
      console.error("Email submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "There was an error submitting your form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
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
                    contact@uxcraftstudio.com
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

              {/* <Button
                variant="outline"
                className="btn-secondary w-full group"
                onClick={() =>
                  window.open("mailto:contact@uxcraftstudio.com", "_blank")
                }
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Send Email
              </Button> */}
              {/* <Button
                variant="outline"
                className="btn-secondary w-full group"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&to=contact@uxcraftstudio.com&su=Project Inquiry&body=Hi%20UXCraft%20Studio%2C",
                    "_blank"
                  )
                }
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Send Email
              </Button> */}
              {/* <Button
                variant="outline"
                className="btn-secondary w-full group"
                onClick={() => {
                  window.location.href =
                    "mailto:contact@uxcraftstudio.com?subject=Project Inquiry&body=Hi UXCraft Studio,";
                }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Send Email
              </Button> */}
              <Button
                variant="outline"
                className="btn-secondary w-full group"
                onClick={() => {
                  // const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact@uxcraftstudio.com&su=Project Inquiry&body=Hi UXCraft Studio,`;
                  // const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=new&to=contact@uxcraftstudio.com&su=Project Inquiry&body=Hi UXCraft Studio,`;
                  const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact@uxcraftstudio.com&su=Project Inquiry&body=Hi UXCraft Studio,`;
                  window.open(gmailUrl, "_blank");
                }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                {/* Send Email via Gmail */}
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
                        className="w-full cursor-pointer px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
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

                    {/* <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full cursor-pointer px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div> */}
                    <div className="space-y-2">
                      <label className="block text-white font-medium">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={
                          formData.budget.startsWith("custom:")
                            ? "custom"
                            : formData.budget
                        }
                        onChange={handleChange}
                        className="w-full cursor-pointer px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="custom">$5,000+ (Custom)</option>
                      </select>

                      {/* Custom budget input appears only when "custom" is selected */}
                      {formData.budget.startsWith("custom:") ||
                      formData.budget === "custom" ? (
                        <div className="mt-2">
                          <label className="block text-white font-medium">
                            Enter Custom Amount
                          </label>
                          <input
                            type="number"
                            name="customBudget"
                            value={
                              formData.budget.startsWith("custom:")
                                ? formData.budget.split(":")[1]
                                : ""
                            }
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-studio-gray-800 border border-studio-gray-700 rounded-lg text-white focus:border-studio-accent-purple focus:ring-1 focus:ring-studio-accent-purple focus:outline-none transition-all"
                            placeholder="Enter your budget amount"
                            min="5000"
                          />
                        </div>
                      ) : null}
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
