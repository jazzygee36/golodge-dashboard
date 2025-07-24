"use client";

import { FloatingLabelInput } from "@/components/floating-label-input";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { $fetch } from "@/lib/fetch";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Toast from "@/components/toast";

type FormState = "initial" | "login" | "register";
type FormStateAction = Dispatch<SetStateAction<FormState>>;

function MainForm({
  setFormState,
  email,
  setEmail,
}: {
  setFormState: FormStateAction;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  const { mutate: checkEmail, isPending: isCheckingEmail } = useMutation({
    mutationFn: async (email: string) => {
      const { data, error } = await $fetch<{
        status: boolean;
        data: {
          exists: boolean;
        };
      }>("/auth/check-email", {
        body: { email },
      });

      if (error) {
        throw new Error(error.message);
      }

      return data.data;
    },

    onSuccess: (data) => {
      if (data.exists) {
        setFormState("login");
      } else {
        setFormState("register");
      }
    },

    onError: (error: Error) => {
      alert(`Error checking email: ${error.message}`);

      // Optionally, you can show an error message to the user
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim() === "") {
          alert("Please enter your email address.");
          return;
        }
        checkEmail(email);
      }}
      className="space-y-4"
    >
      <FloatingLabelInput
        name="email"
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        disabled={isCheckingEmail}
        style={{ cursor: isCheckingEmail ? "not-allowed" : "pointer" }}
      >
        {isCheckingEmail ? "Checking..." : "Continue with Email"}
      </button>
    </form>
  );
}

function LoginForm({
  setFormState,
  email,
}: {
  setFormState: FormStateAction;
  email: string;
}) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const { data: response, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return response;
    },
    onSuccess: (data) => {
      setShowToast(true);

      setTimeout(() => {
        router.push("/");
      }, 2000); // wait 2 seconds
    },
    onError: (error: Error) => {
      console.error(error);
      alert(`Error during login: ${error.message}`);
      // Optionally, you can show an error message to the user
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("password") as string;

        if (password.trim() === "") {
          // alert("Please enter your password.");
          return;
        }

        loginUser({ email, password });
      }}
      className="space-y-4"
    >
      <FloatingLabelInput
        name="email"
        label="Email address"
        type="email"
        defaultValue={email}
        disabled
      />
      <FloatingLabelInput
        name="password"
        label="Password"
        type="password"
        required
      />
      <button
        type="submit"
        className={cn(
          "w-full bg-primary text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95",
          isPending ? "bg-primary/80 cursor-not-allowed" : ""
        )}
        disabled={isPending}
      >
        {isPending ? "Please wait..." : "Sign in"}
      </button>
      <button
        type="button"
        onClick={() => setFormState("initial")}
        className="w-full text-primary text-sm cursor-pointer hover:underline"
      >
        Use a different email
      </button>
      {showToast && (
        <Toast
          message="Login Successful! Redirecting..."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </form>
  );
}

function RegisterationForm({
  setFormState,
  email,
}: {
  setFormState: FormStateAction;
  email: string;
}) {
  const [showToast, setShowToast] = useState(false);
  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async (data: {
      email: string;
      name: string;
      password: string;
    }) => {
      const { data: response, error } = await authClient.signUp.email({
        email: data.email,
        name: data.name,
        password: data.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return response;
    },

    // onSuccess: () => {
    //   setShowToast(true);
    //   setFormState("login");
    // },
    onSuccess: (data) => {
      setShowToast(true);

      setTimeout(() => {
        setFormState("login");
      }, 2000); // wait 2 seconds
    },

    onError: (error: Error) => {
      console.error(error);
      alert(`Error during registration: ${error.message}`);
      // Optionally, you can show an error message to the user
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        registerUser({
          email,
          name,
          password,
        });
      }}
      className="space-y-4"
    >
      <FloatingLabelInput
        name="email"
        label="Email address"
        type="email"
        defaultValue={email}
        disabled
      />
      <FloatingLabelInput
        name="name"
        label="Full Name"
        type="text"
        autoComplete="name"
        required
      />
      <FloatingLabelInput
        name="password"
        label="Create Password"
        type="password"
        required
      />
      <button
        type="submit"
        className={cn(
          "w-full bg-primary text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95",
          isPending ? "bg-primary/80 cursor-not-allowed" : ""
        )}
        disabled={isPending}
      >
        {isPending ? "Please wait..." : "Create Account"}
      </button>
      <button
        type="button"
        onClick={() => setFormState("initial")}
        className="w-full text-primary text-sm"
      >
        Use a different email
      </button>
      {showToast && (
        <Toast
          message="Registration successful! Redirecting..."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </form>
  );
}

const renderForm = (
  formState: FormState,
  setFormState: FormStateAction,
  email: string,
  setEmail: Dispatch<SetStateAction<string>>
) => {
  switch (formState) {
    case "initial":
      return (
        <MainForm
          key="main"
          setFormState={setFormState}
          email={email}
          setEmail={setEmail}
        />
      );
    case "login":
      return (
        <LoginForm key="login" email={email} setFormState={setFormState} />
      );
    case "register":
      return (
        <RegisterationForm
          key="register"
          email={email}
          setFormState={setFormState}
        />
      );
    default:
      return null;
  }
};

export function useAuthForm() {
  const [formState, setFormState] = useState<FormState>("initial");
  const [email, setEmail] = useState("");
  const form = useCallback(
    () => renderForm(formState, setFormState, email, setEmail),
    [email, formState]
  );

  return {
    formState,
    form,
  };
}
