import React from "react";
import Link from "next/link";
import UserSection from "./NavBar/UserSection";
import isUserLoggedInFunc from "@/utils/isUserLoggedIn";
import getUser from "@/utils/getUser";
import ThemeChange from "../theme/themeChange";

const Navbar = async () => {
  const isUserLoggedIn = await isUserLoggedInFunc();

  const user = await getUser();

  return (
    <nav className="mb-5 flex items-center justify-between py-5">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Blog
            <span className="text-blue-500">
              A<sup>2</sup>
            </span>
          </h1>
        </Link>
      </div>

      <ThemeChange />

      <UserSection isUserLoggedInProp={isUserLoggedIn} user={user} />
    </nav>
  );
};

export default Navbar;
