import type { Metadata } from "next";
import '../globals.css'
import { use } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import DashboardContainer from "@/components/main-dashboard";

export const metadata: Metadata = {

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

  if (!data) redirect("/auth");

  return (
    <DashboardContainer>
        {children}
    </DashboardContainer>
  );
}
