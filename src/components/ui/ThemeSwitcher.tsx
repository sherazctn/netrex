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
      className={`relative p-2 rounded-full transition-all ${
        variant === "dark"
          ? "bg-background/10 text-background hover:bg-background/20"
          : "bg-secondary text-foreground hover:bg-secondary/80"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </motion.div>
    </button>
  );
}
