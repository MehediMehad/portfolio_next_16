"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createMeetingAction } from "@/services/Meeting/meeting.action";
// import { TMeeting } from "@/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { meetingSchema } from "@/validation/meeting";

// Infer type
type MeetingFormValues = z.infer<typeof meetingSchema>;

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

interface BookingModalProps {
  isOpen: boolean;
  date: Date;
  onClose: () => void;
  onMeetingCreated?: (meeting: MeetingFormValues) => void;
}

export default function BookingModal({
  isOpen,
  date,
  onClose,
}: // onMeetingCreated,
BookingModalProps) {
  const dateObj = new Date(date);
  // UTC conversion with same local date
  const isoDate = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    dateObj.getHours() - dateObj.getTimezoneOffset() / 60
  ).toISOString();

  const form = useForm<MeetingFormValues>({
    resolver: zodResolver(meetingSchema),
    defaultValues: {
      date: isoDate,
      startTime: "10:00",
      endTime: "10:30",
      title: "",
      description: "",
      agenda: "Networking",
      platform: "zoom",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: MeetingFormValues) => {
    try {
      const meeting = await createMeetingAction(values);

      if (meeting.statusCode === 201) {
        alert("Meeting created successfully");
        console.log("Meeting created successfully");
      }

      if (isSubmitting) {
        form.reset();
      }
      onClose();
    } catch (err: any) {
      alert(err.message || "Failed to create meeting");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-primary rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-xl font-semibold text-foreground">
            Schedule Meeting
          </h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 space-y-4"
          >
            {/* Date */}
            <FormItem>
              <FormLabel>Date</FormLabel>
              <div className="px-3 py-2 bg-muted rounded-md">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </FormItem>

            {/* Time Fields */}
            <div className="grid grid-cols-2 gap-2">
              {/* Start Time */}
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 bg-input border rounded-md"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* End Time */}
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 bg-input border rounded-md"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter meeting title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      placeholder="Enter meeting description"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Platform */}
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <div className="flex gap-3">
                    {["zoom", "google_meet"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => field.onChange(p)}
                        className={`flex-1 px-4 py-2 rounded-md border-2 font-medium ${
                          field.value === p
                            ? "border-primary bg-primary/10"
                            : "border-border"
                        }`}
                      >
                        {p === "zoom" ? "Zoom" : "Google Meet"}
                      </button>
                    ))}
                  </div>
                </FormItem>
              )}
            />

            {/* Agenda */}
            <FormField
              control={form.control}
              name="agenda"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Type *</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {["Important", "Networking", "Casual", "Opportunity"].map(
                      (m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => field.onChange(m)}
                          className={`px-3 py-2 rounded-md border-2 ${
                            field.value === m
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          }`}
                        >
                          {m}
                        </button>
                      )
                    )}
                  </div>
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Booking..." : "Book Meeting"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
