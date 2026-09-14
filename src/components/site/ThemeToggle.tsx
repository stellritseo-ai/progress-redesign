import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-background/60 hover:bg-muted text-foreground hover:border-primary/50 transition-all duration-200 cursor-pointer shadow-sm ${className}`}
      aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {mounted && theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="w-4 h-4 text-primary rotate-0 scale-100 transition-all" />
      )}
    </button>
  );
}
