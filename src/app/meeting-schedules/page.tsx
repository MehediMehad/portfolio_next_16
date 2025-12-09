import SchedulePageUi from "@/components/ui/modules/Schedules/SchedulePageUi";
import { getAllMeetingsAction } from "@/services/Meeting/meeting.action";

const SchedulePage = async () => {
  const meetings = await getAllMeetingsAction();
  return (
    <>
      <SchedulePageUi meetings={meetings} />
    </>
  );
};

export default SchedulePage;
