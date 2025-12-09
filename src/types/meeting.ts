export type TPlatform = "zoom" | "google_meet";
export type TMeetingStatus = "PENDING" | "ACCEPTED" | "REJECTED";
export type TMeetingAgenda = "Important" | "Networking" | "Casual" | "Opportunity"


interface UserInfo {
    id: string;
    name: string;
    email: string;
    image?: string;
}

export interface TMeeting {
    id: string;
    title: string;
    description: string;
    startTime: string;  // ISO Date
    endTime: string;    // ISO Date
    platform: TPlatform;
    link: string;
    status: TMeetingStatus;
    agenda: TMeetingAgenda;
    createdAt: string;
    updatedAt: string;
    user: UserInfo;
}


export interface MeetingListResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: TMeeting[];
}