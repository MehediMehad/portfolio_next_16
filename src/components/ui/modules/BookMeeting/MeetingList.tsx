"use client";

import { getMeetingsAction } from "@/services/Meeting/meeting.action";
import { Meeting } from "@/types/meeting";
import { useEffect, useState } from "react";

interface MeetingListProps {
  userId: string;
}

export default function MeetingList({ userId }: MeetingListProps) {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const data = await getMeetingsAction(userId);
        setMeetings(data.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load meetings");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Meetings</h1>
      
      {meetings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No meetings found. Create your first meeting!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{meeting.title}</h3>
              {meeting.description && (
                <p className="text-gray-600 mb-3">{meeting.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                <div>
                  <span className="font-medium">Start:</span> {new Date(meeting.startTime).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">End:</span> {new Date(meeting.endTime).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Platform:</span> {meeting.platform}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a 
                  href={meeting.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Join Meeting
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-xs text-gray-500">
                  Created: {new Date(meeting.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}