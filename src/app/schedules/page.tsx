import { bookMeeting } from "@/services/Meeting/meeting.action";
import { format } from "date-fns";

async function getSchedules() {
  const res = await fetch(
    `http://192.168.0.101:3001/api/v1/schedules/available`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to load");
  return res.json();
}

export default async function Page() {
  let slots = [];
  let errMsg: string | null = null;

  try {
    const data = await getSchedules();
    slots = data.data ?? [];
  } catch (e: any) {
    errMsg = e.message;
  }

  if (errMsg) return <p className="p-8 text-red-600">{errMsg}</p>;
  if (slots.length === 0) return <p className="p-8">No slots.</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Book a Slot</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slots.map((s: any) => (
          <form
            key={s.id}
            action={bookMeeting} // <-- এখানে import করা action
            className="border rounded-lg p-5 shadow hover:shadow-md"
          >
            <input type="hidden" name="scheduleId" value={s.id} />
            <p className="font-semibold">
              {format(new Date(s.date), "EEE, MMM dd")}
            </p>
            <p className="text-sm text-gray-600">
              {format(new Date(s.startTime), "hh:mm a")} –{" "}
              {format(new Date(s.endTime), "hh:mm a")}
            </p>

            <input
              name="title"
              placeholder="Title"
              required
              className="mt-3 w-full p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Optional"
              rows={2}
              className="mt-2 w-full p-2 border rounded"
            />
            <select
              name="platform"
              defaultValue="zoom"
              className="mt-2 w-full p-2 border rounded"
            >
              <option value="zoom">Zoom</option>
              <option value="google_meet">Google Meet</option>
            </select>

            <button
              type="submit"
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
