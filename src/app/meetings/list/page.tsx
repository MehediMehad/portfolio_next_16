import MeetingList from "@/components/ui/modules/BookMeeting/MeetingList";

// This could come from your auth system
const DUMMY_USER_ID = "69159273169e09495ba2e27d"; // Replace with actual user ID

export default function MeetingListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <MeetingList userId={DUMMY_USER_ID} />
    </div>
  );
}