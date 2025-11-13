"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

const TOKEN_COOKIE_NAME = "accessToken";
const token = (await cookies()).get(TOKEN_COOKIE_NAME)?.value;
export const BEARER_TOKEN = `Bearer ${token}`

const storeCookies = await cookies();

export const getCurrentUser = async () => {
    const accessToken = storeCookies.get("accessToken")!?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};


export const logout = async () => {
    storeCookies.delete("accessToken");
};