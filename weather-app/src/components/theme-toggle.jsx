import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center cursor-pointer transition-transform duration-500 ${
        !isDark ? "rotate-180" : "rotate-0"
      }`}
    >
      {!isDark ? (
        <Sun className="h-6 w-6 text-white rotate-0 transition-all" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
      )}
    </div>
  );
}
