import { getAllMeetingsAction } from "@/services/Meeting/meeting.action";

export default async function MeetingListPage() {
  const meetings = await getAllMeetingsAction();

  return (
    <div className="mt-20">
      <h1 className="text-xl font-semibold">All Meetings</h1>
      <ul className="space-y-2 mt-3">
        {meetings?.map((m: any) => (
          <li key={m.id} className="border p-3 rounded-md">
            <p>
              <b>{m.title}</b> — {m.platform}
            </p>
            <p>
              {m.startTime} → {m.endTime}
            </p>
            <p>
              Status: <span className="font-bold">{m.status}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
