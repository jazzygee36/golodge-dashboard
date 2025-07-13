"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";

const Settings = () => {
  const router = useRouter();
  const { mutate: signOut, isPending } = useMutation({
    mutationFn: async () => {
      const {data, error} = await authClient.signOut();

      if (error) throw new Error(error.message, { cause: error });

      return data
    },
    onError: (error) => {
      console.error(error);
      alert(error.message)
    },
    onSuccess: () => {
      router.refresh()
    }
  })
  return (
    <div>
      <h1 className="text-[28px] text-[#292D32] font-medium"> Settings</h1>
      <div className="bg-white px-5 py-4">
        <h3 className="text-[#000929]  font-medium h-full">
          Settings Control
        </h3>
        <div
          onClick={() => router.push("/notifications")}
          className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
        >
          <h4>Notification</h4>
        </div>
        <button className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer text-red-500"
          onClick={() => signOut()}
          disabled={isPending}
        >
          {
            isPending ? "Logging out..." :"Log out"
          }
        </button>
      </div>
    </div>
  );
};

export default Settings;
