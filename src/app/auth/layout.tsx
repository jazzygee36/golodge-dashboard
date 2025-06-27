import type { Metadata } from "next";
import '../globals.css'
import { use } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: {
    default: 'GoLodge',
    template: "%s | GoLodge"
  },
  description: "A house rental platform, designed to provide users with a seamless experience for discovering and booking rental properties.",
};


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = use(headers());
  const { data, error } = use(authClient.getSession({
    fetchOptions: {
      headers: headersList,
    }
  }));

  if (error) {
    console.error("Error fetching session:", error);
    return <div>Error loading session</div>;
  }

  console.log(data)

  if (data) redirect("/");

  return children;
}
