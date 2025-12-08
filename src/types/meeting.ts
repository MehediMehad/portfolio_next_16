export type TMeetingStatus = "PENDING" | "ACCEPTED" | "REJECTED";

interface UserInfo {
    id: string;
    name: string;
    email: string;
    image?: string;
}

interface TMeeting {
    id: string;
    title: string;
    description: string;
    startTime: string;  // ISO Date
    endTime: string;    // ISO Date
    platform: "zoom" | "google_meet";
    link: string;
    status: TMeetingStatus;
    user: UserInfo;
}


export interface MeetingListResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: TMeeting[];
}