import { betterFetch } from "@better-fetch/fetch";
import { authClient } from "../auth-client";
import { User } from "better-auth";

export const getSingleUser = async (userId: string): Promise<User | null> => {
  const { data } = await authClient.getSession();

  if (!data?.session?.token) {
    throw new Error("Unauthorized: No token found");
  }

  const res = await betterFetch<User | null>(
    `/admin/users/${userId}?profile=true`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.session.token}`,
      },
    }
  );

  return res.data;
};
