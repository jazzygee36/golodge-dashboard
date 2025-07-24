import { betterFetch } from "@better-fetch/fetch";
import { authClient } from "../auth-client";
import { User } from "better-auth";

export const getSingleListing = async (listing_id: string): Promise<User | null> => {
  const { data } = await authClient.getSession();

  if (!data?.session?.token) {
    throw new Error("Unauthorized: No token found");
  }

  const res = await betterFetch<User | null>(
    `/admin/listings/${listing_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.session.token}`,
      },
    }
  );

  return res.data;
};
