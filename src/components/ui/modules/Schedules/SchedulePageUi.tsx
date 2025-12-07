"use client";

import BookingModal from "@/components/ui/modules/Schedules/BookingModal";
import CalendarView from "@/components/ui/modules/Schedules/CalendarView";
import { useState } from "react";

const SchedulePageUi = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <main className="bg-background p-0 py-6 px-4 md:p-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Meeting Scheduler
          </h1>
          <p className="text-muted-foreground">
            Schedule your meetings and manage bookings
          </p>
        </div>

        {/* Calendar Component */}
        <CalendarView onDateClick={handleDateClick} />

        {/* Booking Modal */}
        {selectedDate && (
          <BookingModal
            isOpen={isModalOpen}
            date={selectedDate}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </main>
  );
};

export default SchedulePageUi;
