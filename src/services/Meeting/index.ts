"use server";

import { getBearerToken } from "../AuthService/AuthServiceHelper";

export async function createMeetingAction(formData: FormData) {
  const userId = formData.get("userId") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;
  const platform = formData.get("platform") as string;

  const bearerToken = await getBearerToken();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (bearerToken) {
    headers.Authorization = bearerToken;
  }

  const res = await fetch("http://localhost:3001/api/v1/meeting", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      userId,
      title,
      description,
      startTime,
      endTime,
      platform,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create meeting");
  }

  return await res.json();
}
