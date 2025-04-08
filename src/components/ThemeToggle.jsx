import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-lg z-50"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
}
