"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Theme = () => {
  const { setTheme, systemTheme } = useTheme();
  const [themMode, setThemeMode] = React.useState<"light" | "dark">("dark");

  const clickHandler = (): void => {
    if (themMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  React.useEffect(() => {
    setTheme(themMode);

    // eslint-disable-next-line
  }, [themMode]);

  React.useEffect(() => {
    setThemeMode(systemTheme || "dark");

    // eslint-disable-next-line
  }, []);

  return (
    <div
      onClick={clickHandler}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full dark:border-white"
    >
      {themMode === "light" ? (
        <Moon className="text-blue-500" />
      ) : (
        <Sun className="text-yellow-300" />
      )}
    </div>
  );
};

export default Theme;
