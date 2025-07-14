import { Metadata } from "next";
import SignIn from "./page-client";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in or create an account",
};

export default function AuthPage() {

  return <SignIn />;
}