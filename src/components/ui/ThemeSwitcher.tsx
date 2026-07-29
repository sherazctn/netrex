import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  variant?: "light" | "dark";
}

export function ThemeSwitcher({ variant = "light" }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-1.5 rounded-full transition-all ${
        variant === "dark"
          ? "bg-white/10 text-white hover:bg-white/20"
          : "bg-white/10 text-white hover:bg-white/20"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-3.5 w-3.5" />
        ) : (
          <Moon className="h-3.5 w-3.5" />
        )}
      </motion.div>
    </button>
  );
}
