// // app/book/page.tsx
// import { format } from "date-fns";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// // Step 1: Fetch available schedules
// async function getSchedules() {
//   const res = await fetch(
//     `http://192.168.0.101:3001/api/v1/schedules/available`,
//     {
//       cache: "no-store", // real-time data
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch schedules");
//   return res.json();
// }

// // Step 2: Server Action for Booking
// async function bookMeeting(formData: FormData) {
//   "use server";

//   const scheduleId = formData.get("scheduleId") as string;
//   const title = formData.get("title") as string;
//   const platform = formData.get("platform") as string; // optional

//   if (!scheduleId || !title) {
//     throw new Error("Missing required fields");
//   }

//   // Call your backend API
//   const response = await fetch(`http://192.168.0.101:3001/api/v1/meeting`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // Send JWT token if auth needed
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTE1OTI3MzE2OWUwOTQ5NWJhMmUyN2QiLCJlbWFpbCI6Im1kbWVoZWRpaGFzYW5tZWhhZDJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjMwNDE3MjcsImV4cCI6MTc2NTYzMzcyN30.byl00a8EyCInQsOApMOyZ7ZBmez_cFRk4li7tzq6Wak`,
//     },
//     body: JSON.stringify({
//       scheduleId,
//       title,
//       description: formData.get("description") || undefined,
//       platform: platform || "zoom",
//     }),
//   });

//   const result = await response.json();
//   console.log({ result });

//   if (!response.ok) {
//     throw new Error(result.message || "Failed to book meeting");
//   }

//   // Success: Revalidate + Redirect
//   revalidatePath("/book");
//   redirect(`/meeting/success?link=${encodeURIComponent(result.data.link)}`);
// }

// export default async function Page() {
//   let schedules = [];
//   let error = null;

//   try {
//     const data = await getSchedules();
//     schedules = data.data || [];
//   } catch (err: any) {
//     error = err.message;
//   }

//   if (error) {
//     return <div className="p-8 text-red-600">Error: {error}</div>;
//   }

//   if (schedules.length === 0) {
//     return <div className="p-8">No available slots at the moment.</div>;
//   }

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8 text-center">Book a Meeting</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {schedules.map((s: any) => (
//           <form
//             key={s.id}
//             action={bookMeeting}
//             className="border border-gray-300 rounded-lg p-5 shadow hover:shadow-lg transition"
//           >
//             {/* Hidden fields */}
//             <input type="hidden" name="scheduleId" value={s.id} />

//             {/* Date & Time */}
//             <div className="text-center mb-4">
//               <p className="font-semibold text-lg">
//                 {format(new Date(s.date), "EEEE, MMM dd")}
//               </p>
//               <p className="text-gray-600">
//                 {format(new Date(s.startTime), "hh:mm a")} -{" "}
//                 {format(new Date(s.endTime), "hh:mm a")}
//               </p>
//             </div>

//             {/* Title Input */}
//             <input
//               type="text"
//               name="title"
//               placeholder="Meeting Title (e.g., Project Demo)"
//               required
//               className="w-full p-2 border rounded mb-3 text-sm"
//             />

//             {/* Optional: Description */}
//             <textarea
//               name="description"
//               placeholder="Optional description"
//               rows={2}
//               className="w-full p-2 border rounded mb-3 text-sm resize-none"
//             />

//             {/* Platform Select */}
//             <select
//               name="platform"
//               className="w-full p-2 border rounded mb-4 text-sm"
//               defaultValue="zoom"
//             >
//               <option value="zoom">Zoom</option>
//               <option value="google_meet">Google Meet</option>
//             </select>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
//             >
//               Book Now
//             </button>
//           </form>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/app/schedules/page.tsx
// src/app/schedules/page.tsx

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
