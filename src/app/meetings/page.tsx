"use client";

import { createMeetingAction } from "@/services/Meeting";
import { useState } from "react";

export default function MeetingPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await createMeetingAction(formData);
      setMessage(`✅ Meeting created: ${result.link}`);
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Meeting</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="hidden" name="userId" value="YOUR_USER_ID" />

        <div>
          <label>Title</label>
          <input
            name="title"
            className="w-full border px-3 py-2 rounded"
            placeholder="Meeting title"
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label>Start Time</label>
          <input
            type="datetime-local"
            name="startTime"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label>End Time</label>
          <input
            type="datetime-local"
            name="endTime"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label>Platform</label>
          <select
            name="platform"
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="zoom">Zoom</option>
            <option value="google_meet">Google Meet</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Meeting
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
