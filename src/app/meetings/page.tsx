"use client";

import "@/styles/calenders.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import BookingModal from "@/components/ui/modules/Meetings/BookingModal";
export default function MeetingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  const handleDateClick = (arg: any) => {
    const now = new Date();
    const clicked = new Date(arg.dateStr);

    // Only allow booking at least 30 minutes in the future
    if (clicked < new Date(now.getTime() + 30 * 60 * 1000)) {
      alert("You cannot book a meeting for this time.");
      return;
    }

    // For month view dateClick provides only the date string (e.g., "YYYY-MM-DD")
    setSelectedSlot({
      date: arg.dateStr,
      startTime: "10:00", // Default start time as time is not selected in month view
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen pt-20">
        {/* <Header /> */}

        <div className="bg-white max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 border rounded-2xl shadow-2xl calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth" // Changed to show only the month view
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "", // Kept only month view button
            }}
            // The following props are for time views and can be removed or ignored in dayGridMonth view
            slotMinTime="09:00:00"
            slotMaxTime="22:00:00"
            slotDuration="00:30:00"
            slotLabelInterval="00:30"
            height="auto"
            selectable={true}
            selectMirror={true}
            dateClick={handleDateClick}
            selectOverlap={false}
            weekends={true}
            nowIndicator={true}
            buttonText={{
              today: "",
            }}
            titleFormat={{ year: "numeric", month: "long" }}
            dayCellContent={(arg: any) => (
              <div className="text-sm font-medium">{arg.date.getDate()}</div>
            )}
          />
        </div>
      </div>

      {isModalOpen && selectedSlot && (
        <BookingModal
          slot={selectedSlot}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedSlot(null);
          }}
        />
      )}
    </>
  );
}
