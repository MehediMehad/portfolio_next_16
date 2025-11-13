"use server";

import { cookies } from "next/headers";

const TOKEN_COOKIE_NAME = "accessToken";

/**
 * Retrieves the access token from cookies and formats it as a Bearer token.
 * Must be called within a guaranteed request scope (e.g., inside a Server Action).
 */
export async function getBearerToken(): Promise<string> {
    const cookieStore = cookies();
    const token = (await cookieStore).get(TOKEN_COOKIE_NAME)?.value;

    if (!token) {
        console.warn("Access token not found in cookies.");
        return "";
    }

    return `Bearer ${token}`;
}