"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockBookings, type MeetingType } from "@/lib/mokdata";
interface CalendarViewProps {
  onDateClick: (date: Date) => void;
}

const typeColors: Record<
  MeetingType,
  { bg: string; text: string; border: string }
> = {
  Important: {
    bg: "bg-type-important",
    text: "text-white",
    border: "border-type-important",
  },
  Networking: {
    bg: "bg-type-networking",
    text: "text-white",
    border: "border-type-networking",
  },
  "Project Plan": {
    bg: "bg-type-project",
    text: "text-white",
    border: "border-type-project",
  },
  Opportunity: {
    bg: "bg-type-opportunity",
    text: "text-white",
    border: "border-type-opportunity",
  },
};

export default function CalendarView({ onDateClick }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getBookingsForDate = (day: number | null) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return mockBookings.filter((booking) => booking.date === dateStr);
  };

  const hasBookings = (day: number | null) => {
    return getBookingsForDate(day).length > 0;
  };

  return (
    <Card className="p-4 md:p-6 gap-0 bg-card border border-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-foreground">{monthName}</h2>
        <div className="flex gap-2">
          <Button
            onClick={previousMonth}
            variant="outline"
            size="sm"
            className="text-foreground bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={nextMonth}
            variant="outline"
            size="sm"
            className="text-foreground bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {/* <CalendarHeader WeekView /> */}
      <div className="grid grid-cols-7 gap-2 bg-primary/10 py-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-muted-foreground text-sm"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-5 mt-2">
        {days.map((day, index) => {
          const bookings = getBookingsForDate(day);
          const hasBookingsOnDay = hasBookings(day);

          return (
            <button
              key={index}
              onClick={() =>
                day &&
                onDateClick(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
              }
              disabled={!day}
              className={`
                min-h-24 px-0.5 border-2 text-left
                ${!day ? "bg-primary/5 cursor-not-allowed" : ""}
                ${
                  hasBookingsOnDay
                    ? "border-border bg-background hover:bg-primary/5 cursor-pointer"
                    : "border-border bg-background hover:bg-primary/5 cursor-pointer"
                }
              `}
            >
              {day && (
                <div className="flex flex-col h-full">
                  <span className="text-sm text-center pt-2 font-semibold text-foreground mb-1">
                    {day}
                  </span>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    {bookings.slice(0, 2).map((booking) => (
                      <div
                        key={booking.id}
                        className={`text-xs px-2 py-1 rounded truncate ${
                          typeColors[booking.type].bg
                        } ${typeColors[booking.type].text}`}
                      >
                        {booking.time} {booking.title}
                      </div>
                    ))}
                    {bookings.length > 2 && (
                      <div className="text-xs text-muted-foreground px-2">
                        +{bookings.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {(
          [
            "Important",
            "Networking",
            "Project Plan",
            "Opportunity",
          ] as MeetingType[]
        ).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${typeColors[type].bg}`}></div>
            <span className="text-sm text-muted-foreground">{type}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
