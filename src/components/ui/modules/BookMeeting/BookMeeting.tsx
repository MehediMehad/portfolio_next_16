"use client";

import type React from "react";

import { useState } from "react";
import { Calendar, Clock, User, } from "lucide-react";

export default function BookMeeting() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedDate("");
        setSelectedTime("");
        setFormData({ name: "", email: "", topic: "" });
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/50 border border-primary/30 rounded-xl p-8">
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary">
                Meeting scheduled successfully! Check your email for
                confirmation details.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <User size={24} className="text-primary" />
                  Your Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-sm font-medium mb-2"
                    >
                      Meeting Topic
                    </label>
                    <input
                      type="text"
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar size={24} className="text-primary" />
                  Select Date
                </h2>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Time Selection */}
              <div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock size={24} className="text-primary" />
                  Select Time
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                          : "bg-card border border-primary/30 text-foreground hover:border-primary"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meeting Details */}
              <div className="bg-background border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Meeting Details</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>
                    <span className="text-foreground font-medium">
                      Duration:
                    </span>{" "}
                    30 minutes
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Format:</span>{" "}
                    Video Call (Zoom)
                  </p>
                  <p>
                    <span className="text-foreground font-medium">
                      Timezone:
                    </span>{" "}
                    Pacific Time (PT)
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full glow-button px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Confirm Meeting
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
