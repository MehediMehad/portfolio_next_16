"use server";

import { revalidatePath } from "next/cache";

export async function createMeetingAction(formData: FormData) {
    const userId = formData.get("userId") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const startTime = formData.get("startTime") as string;
    const endTime = formData.get("endTime") as string;
    const platform = formData.get("platform") as string;

    // Validate required fields
    if (!userId || !title || !startTime || !endTime || !platform) {
        throw new Error("Missing required fields");
    }

    const token = process.env.API_BEARER_TOKEN; // Get from your auth system

    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`http://localhost:3001/api/v1/meeting`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            userId,
            title,
            description: description || "",
            startTime,
            endTime,
            platform,
        }),
    });

    console.log({ res });


    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create meeting");
    }

    const result = await res.json();

    // Revalidate cache to show updated data
    revalidatePath("/meetings/list");

    return result;
}

export async function getMeetingsAction(userId: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/api/v1/meetings?userId=${userId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch meetings");
    }

    return await res.json();
}