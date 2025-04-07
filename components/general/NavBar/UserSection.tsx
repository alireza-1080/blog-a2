"use client";
import React from "react";
import SignSection from "./SignSection";
import NavProfile from "./NavProfile";
import useSWR from "swr";
import { UserType } from "@/utils/getUser";

const UserSection = ({
  isUserLoggedInProp,
  user,
}: {
  isUserLoggedInProp: boolean;
  user: UserType | null;
}) => {
  const [isLoggedIn, setIsLoggedIn] =
    React.useState<boolean>(isUserLoggedInProp);

  const isLoggedInFetcher = async (url: string) => {
    const isLoggedInResponse = await fetch(url, {
      method: "POST",
      credentials: "include",
    });

    const isUserLoggedInData = await isLoggedInResponse.json();

    const isUserLoggedIn = isUserLoggedInData.isUserLoggedIn;

    setIsLoggedIn(isUserLoggedIn);
  };

  useSWR("/api/user/is-logged-in", isLoggedInFetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 0,
  });

  return <>{isLoggedIn ? <NavProfile user={user} /> : <SignSection />}</>;
};

export default UserSection;
