"use server";

import { revalidatePath } from "next/cache";
import { getAuthToken } from "@/lib/auth";

export async function bookMeeting(formData: FormData) {
    const scheduleId = formData.get('scheduleId') as string;
    const title = formData.get('title') as string;
    const description = (formData.get('description') as string) || undefined;
    const platform = (formData.get('platform') as string) || 'zoom';

    const token = await getAuthToken();

    const res = await fetch(`http://192.168.0.101:3001/api/v1/meeting`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ scheduleId, title, description, platform }),
    });

    const result = await res.json();
    console.log(result);


    if (!res.ok) {
        throw new Error(result.message || 'Failed to book meeting');
    }

    revalidatePath('/schedules');
    // revalidatePath("/meetings/list");
    // redirect(`/meeting/success?link=${encodeURIComponent(result.data.link)}`);
}