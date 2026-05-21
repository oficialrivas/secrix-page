import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitchIcon() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-white" />
      ) : (
        <Moon className="w-5 h-5 text-white" />
      )}
    </button>
  );
}
