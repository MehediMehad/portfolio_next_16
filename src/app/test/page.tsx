import { getAllMeetingsAction } from "@/services/Meeting/meeting.action";
import ClientMeetingList from "./MeetingList";

export default async function MeetingListPage() {
  const meetings = await getAllMeetingsAction();

  return <ClientMeetingList meetings={meetings} />;
}
