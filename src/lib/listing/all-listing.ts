import { betterFetch } from "@better-fetch/fetch";
import { authClient } from "../auth-client";
import { User } from "better-auth";

export const getAllListing = async (): Promise<User[]> => {
  const { data } = await authClient.getSession();

  if (!data?.session?.token) {
    throw new Error("Unauthorized: No token found");
  }

  const res = await betterFetch<User[] | null>("/admin/listings", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data.session.token}`,
    },
  });

  return res.data ?? []; // Ensure always returns User[]
};

