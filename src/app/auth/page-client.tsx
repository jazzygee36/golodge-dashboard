"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthForm } from "./forms";

export default function SignIn() {
  const { form, formState } = useAuthForm();

  return (
    <div className="min-h-screen flex flex-col items-center md:justify-center px-4 pt-8 bg-white">
      <div className="w-full max-w-md space-y-6">
        {/* Title and Subtitle Section */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {formState === "initial"
              ? "Sign in or create an account"
              : formState === "login"
              ? "Welcome back!"
              : "Create your account"}
          </h1>
          <p className="text-gray-500">
            {formState === "initial"
              ? "Time to dive into luxury living! Let's get started!"
              : formState === "login"
              ? "Enter your password to continue"
              : "Just a few more details to get started"}
          </p>
        </div>

        {/* Auth Form Section */}
        <div>{form()}</div>

        {/* Separator and Social Login Options (only for initial state) */}
        {formState === "initial" && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  or use one of these options
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["facebook", "apple", "google"].map((provider) => (
                <button
                  key={provider}
                  className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 active:scale-98 transition-all duration-200 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <Image
                    src={`/${provider}.svg`}
                    alt={provider}
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Terms and Privacy Links */}
        <p className="text-xs text-center text-gray-500">
          By signing in or creating an account, you agree with our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Statement
          </Link>
        </p>

        {/* Copyright Information */}
        <div className="text-center text-xs text-gray-500">
          <p>All rights reserved</p>
          <p>Copyright - Golodge.com</p>
        </div>
      </div>
    </div>
  );
}
