"use client";

import { useState } from "react";
import StaggerAnimation from "@/components/ui/shared/Animation/StaggerAnimation";
import FadeInUp from "@/components/ui/shared/Animation/FadeInUp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <FadeInUp>
      <div className="bg-card/50 border border-primary/30 rounded-xl p-8 hover-lift">
        <h2 className="text-2xl font-bold mb-6">Send me a Message</h2>

        {submitted && (
          <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary scale-in">
            Thank you for your message! I'll get back to you as soon as
            possible.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "subject"].map((field, index) => (
            <StaggerAnimation delay={100 * (index + 1)} key={field}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </StaggerAnimation>
          ))}

          <StaggerAnimation delay={300}>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </StaggerAnimation>

          <StaggerAnimation delay={350}>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full glow-button px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover-lift"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </StaggerAnimation>
        </form>
      </div>
    </FadeInUp>
  );
}
