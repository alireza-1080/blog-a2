"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

const SigninForm = () => {
  const router = useRouter();

  const [identifier, setIdentifier] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isPending, setIsPending] = React.useState<boolean>(false);

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const loginResponse = await fetch("/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await loginResponse.json();

      mutate("/api/user/is-logged-in");
      mutate("/api/user/get-me");

      if (loginResponse.status >= 400) {
        toast.error(data.error);
        setIsPending(false);
        return;
      }

      toast.success(data.message);
      router.replace("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast(`❌ ${error.message}`);
        console.log(error);
        setIsPending(false);
      }
    }
  };

  return (
    <form
      className="flex w-full flex-col items-center gap-6"
      onSubmit={formSubmitHandler}
    >
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="username"
          className="font-medium text-gray-900 dark:text-gray-100"
        >
          Username or Email
        </Label>
        <Input
          type="text"
          id="username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-blue-500"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="password"
          className="font-medium text-gray-900 dark:text-gray-100"
        >
          Password
        </Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-blue-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full max-w-sm cursor-pointer rounded-lg border-2 border-blue-600 bg-blue-600 text-white transition-colors hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        disabled={isPending}
      >
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
