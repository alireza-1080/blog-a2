import React from "react";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SigninForm from "@/components/auth/SigninForm";
import SignupForm from "@/components/auth/SignupForm";
import isUserLoggedInFunc from "@/utils/isUserLoggedIn";

type SearchParams = {
  mode: undefined | "signup";
};

const Auth = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const isUserLoggedIn = await isUserLoggedInFunc();

  if (isUserLoggedIn) {
    redirect("/dashboard");
  }

  const { mode } = await searchParams;

  const formType = mode ? "signup" : "signin";

  return (
    <div className="flex w-full justify-center py-8">
      <Tabs
        defaultValue={formType}
        className="w-full max-w-md rounded-xl border-2 border-gray-300 bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800/50"
      >
        <TabsList className="mb-6 grid w-full grid-cols-2 rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
          <TabsTrigger
            value="signin"
            className="cursor-pointer text-gray-900 transition-colors data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:text-gray-100 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:bg-blue-500"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="cursor-pointer text-gray-900 transition-colors data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:text-gray-100 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:bg-blue-500"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-0">
          <SigninForm />
        </TabsContent>
        <TabsContent value="signup" className="mt-0">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
