export interface Meeting {
    id: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    platform: 'zoom' | 'google_meet';
    link: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateMeetingInput {
    userId: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    platform: 'zoom' | 'google_meet';
}