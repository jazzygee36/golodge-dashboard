import { createFetch } from "@better-fetch/fetch";

export const $fetch = createFetch({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    duplex: "half",
    credentials: "include",
})