import MeetingForm from "@/components/ui/modules/BookMeeting/MeetingForm";

// This could come from your auth system
const DUMMY_USER_ID = "69159273169e09495ba2e27d"; // Replace with actual user ID

export default function CreateMeetingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <MeetingForm userId={DUMMY_USER_ID} />
    </div>
  );
}