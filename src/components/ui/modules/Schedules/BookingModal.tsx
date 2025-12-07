"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addMockBooking, type MeetingType } from "@/lib/mokdata";
// import { addMockBooking, type MeetingType } from "@/lib/mock-data";

interface BookingModalProps {
  isOpen: boolean;
  date: Date;
  onClose: () => void;
}

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function BookingModal({
  isOpen,
  date,
  onClose,
}: BookingModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("10:00");
  const [type, setType] = useState<MeetingType>("Networking"); // Added type state
  const [platform, setPlatform] = useState<"google-meet" | "zoom">(
    "google-meet"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!type) {
      alert("Please select a meeting type");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const dateStr = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    addMockBooking({
      id: Date.now().toString(),
      title,
      description,
      date: dateStr,
      time,
      platform,
      type, // Added type to booking
    });

    setIsSubmitting(false);
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setTime("10:00");
    setType("Networking");
    setPlatform("google-meet");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-primary rounded-lg shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-xl font-semibold text-foreground">
            Schedule Meeting
          </h3>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Date display */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Date
            </label>
            <div className="px-3 py-2 bg-muted rounded-md text-foreground">
              {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Title input */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Meeting Title
            </label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meeting title"
              className="w-full"
              required
            />
          </div>

          {/* Description input */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter meeting description"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Meeting Type *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  "Important",
                  "Networking",
                  "Project Plan",
                  "Opportunity",
                ] as MeetingType[]
              ).map((meetingType) => (
                <button
                  key={meetingType}
                  type="button"
                  onClick={() => setType(meetingType)}
                  className={`px-3 py-2 rounded-md border-2 font-medium text-sm transition-all ${
                    type === meetingType
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  {meetingType}
                </button>
              ))}
            </div>
          </div>

          {/* Platform selection */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Platform
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPlatform("google-meet")}
                className={`flex-1 px-4 py-2 rounded-md border-2 font-medium transition-all ${
                  platform === "google-meet"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border text-foreground hover:border-primary"
                }`}
              >
                Google Meet
              </button>
              <button
                type="button"
                onClick={() => setPlatform("zoom")}
                className={`flex-1 px-4 py-2 rounded-md border-2 font-medium transition-all ${
                  platform === "zoom"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border text-foreground hover:border-primary"
                }`}
              >
                Zoom
              </button>
            </div>
          </div>

          {/* Submit buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              className="flex-1 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 glow-button"
            >
              {isSubmitting ? "Booking..." : "Book Meeting"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
