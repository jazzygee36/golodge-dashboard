import { betterFetch } from "@better-fetch/fetch";
import { authClient } from "../auth-client";
import { User } from "better-auth";

export const banUser = async (userId: string): Promise<User> => {
  const { data } = await authClient.getSession();

  if (!data?.session?.token) {
    throw new Error("Unauthorized: No token found");
  }

  const res = await betterFetch<User>(`/admin/users/${userId}/deactivate`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${data.session.token}`,
    },
  });

  if (!res.data) {
    throw new Error("Failed to ban user: No data returned from server.");
  }

  return res.data;
};
