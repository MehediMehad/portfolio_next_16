"use client";

import { bookMeeting } from "@/services/Meeting/meeting.action";
import { useState } from "react";

export default function BookingModal({
  slot,
  onClose,
}: {
  slot: any;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState<"zoom" | "google_meet">(
    "google_meet"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("date", slot.date);
    formData.append("startTime", slot.startTime);
    formData.append(
      "endTime",
      new Date(
        new Date(`${slot.date}T${slot.startTime}`).getTime() + 30 * 60000
      )
        .toISOString()
        .slice(11, 16)
    );
    formData.append("platform", platform);

    const result = await bookMeeting(formData);

    if (result.success) {
      window.location.href = `/meeting/success?link=${encodeURIComponent(
        result.link
      )}&title=${encodeURIComponent(formData.get("title") as string)}`;
    } else {
      alert(result.message || "Booking failed");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Confirm Your Booking
        </h2>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6 text-center">
          <p className="font-semibold">{slot.date}</p>
          <p className="text-lg">
            {slot.startTime} -{" "}
            {new Date(
              new Date(`${slot.date}T${slot.startTime}`).getTime() + 30 * 60000
            )
              .toTimeString()
              .slice(0, 5)}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Meeting Title"
            required
            className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="Description (optional)"
            rows={3}
            className="w-full px-4 py-3 border rounded-lg mb-4"
          />

          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Platform</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="platform"
                  value="google_meet"
                  checked={platform === "google_meet"}
                  onChange={() => setPlatform("google_meet")}
                  className="mr-3"
                />
                <span>Google Meet</span>
              </label>
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="platform"
                  value="zoom"
                  checked={platform === "zoom"}
                  onChange={() => setPlatform("zoom")}
                  className="mr-3"
                />
                <span>Zoom</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-70"
            >
              {loading ? "Booking..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
