"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import BookingModal from "@/components/ui/modules/Meetings/BookingModal";
import Header from "@/components/ui/modules/Meetings/Header";

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

    setSelectedSlot({
      date: arg.dateStr.split("T")[0],
      startTime: arg.dateStr.split("T")[1]?.slice(0, 5) || "10:00",
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-background pt-20">
        {/* <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Book a Meeting with Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Free 30-minute consultation via Zoom or Google Meet
          </p>
        </div> */}
        {/* <Header /> */}

        {/* <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6"> */}
        <div className="bg-white max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 border rounded-2xl shadow-2xl">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
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
            locale="en"
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
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
