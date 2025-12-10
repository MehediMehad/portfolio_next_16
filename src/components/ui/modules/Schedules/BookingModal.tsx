"use client";

import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TMeeting } from "@/types";
import { createMeetingAction } from "@/services/Meeting/meeting.action";

interface BookingModalProps {
  isOpen: boolean;
  date: Date;
  onClose: () => void;
  onMeetingCreated?: (meeting: TMeeting) => void; // Optional callback after success
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
  onMeetingCreated,
}: BookingModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:30");
  const [agenda, setAgenda] = useState<TMeeting["agenda"]>("Networking");
  const [platform, setPlatform] = useState<TMeeting["platform"]>("zoom");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setStartTime("10:00");
    setEndTime("10:30");
    setAgenda("Networking");
    setPlatform("zoom");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // FormData object
      const formData = new FormData();

      // Append form object values
      formData.append("date", date.toISOString()); // "2025-12-12T00:00:00.000Z",
      formData.append("startTime", startTime); // "10:00"
      formData.append("endTime", endTime); // "10:30"
      formData.append("title", title);
      formData.append("description", description);
      formData.append("agenda", agenda);
      formData.append("platform", platform);

      // Server action call
      const newMeeting = await createMeetingAction(formData);

      if (onMeetingCreated) {
        onMeetingCreated(newMeeting as TMeeting);
      }

      handleClose();
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to create meeting");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Start & End Time */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Start Time
              </label>
              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
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
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                End Time
              </label>
              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
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
          </div>

          {/* Title */}
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

          {/* Description */}
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

          {/* Agenda */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Meeting Type *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  "Important",
                  "Networking",
                  "Casual",
                  "Opportunity",
                ] as TMeeting["agenda"][]
              ).map((meetingType) => (
                <button
                  key={meetingType}
                  type="button"
                  onClick={() => setAgenda(meetingType)}
                  className={`px-3 py-2 rounded-md border-2 font-medium text-sm transition-all ${
                    agenda === meetingType
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  {meetingType}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Platform
            </label>
            <div className="flex gap-3">
              {(["zoom", "google_meet"] as TMeeting["platform"][]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatform(p)}
                  className={`flex-1 px-4 py-2 rounded-md border-2 font-medium transition-all ${
                    platform === p
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  {p === "zoom" ? "Zoom" : "Google Meet"}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
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
