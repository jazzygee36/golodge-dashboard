import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainDashboard from "@/components/main-dashboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golodge Dashboard",
  description: "Golodge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
       style={{
          backgroundColor: "#F8FAFB",}}
      >
        <MainDashboard title={""} >
       <div className=""> {children}</div>

        </MainDashboard>
      </body>
    </html>
  );
}
