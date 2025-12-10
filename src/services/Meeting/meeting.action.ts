"use server";

import { FieldValues } from "react-hook-form";
import { revalidateTag } from "next/cache";
import { getAuthToken } from "@/lib/auth";
import { MeetingListResponse, TCreatedMeetingResponse } from "@/types";

// const API_BASE_URL = "http://192.168.0.101:3001/api/v1";
const API_BASE_URL = "http://localhost:3001/api/v1";


const request = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const token = await getAuthToken();

    const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    });

    const data = await res.json().catch(() => null);
    console.log(res);


    if (!res.ok) {
        throw new Error(data?.message || "Request failed");
    }

    return data as T;
}



const createMeetingAction = async (formData: FieldValues) => {

    const res = await request<TCreatedMeetingResponse>("meeting", {
        method: "POST",
        body: JSON.stringify(formData),
    });

    console.log({ res });


    revalidateTag("meetings", "default"); // ✅ revalidate after success

    return res;
}

const getAllMeetingsAction = async () => {
    const { data } = await request<MeetingListResponse>("meeting", {
        method: "GET",
        next: { tags: ["meetings"] },
    });

    return data;
}

const acceptOrRejectMeetingAction = async (meetingId: string, accepted: boolean) => {
    const res = await request(`meeting/${meetingId}`, {
        method: "PATCH",
        body: JSON.stringify({ accepted }),
    });

    revalidateTag("meetings", "default"); // ✅ refresh cache

    return res;
}
export {
    createMeetingAction,
    getAllMeetingsAction,
    acceptOrRejectMeetingAction
};



