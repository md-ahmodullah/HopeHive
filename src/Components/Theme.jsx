import { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className="flex justify-end">
      <div className="theme border border-blue-300 rounded-full flex items-center">
        <button
          onClick={() => setIsDarkMode(false)}
          className={`p-1 rounded-full ${
            !isDarkMode ? "bg-blue-600 text-white" : "dark:bg-gray-700"
          }`}
        >
          <MdLightMode className="text-lg" />
        </button>
        <button
          onClick={() => setIsDarkMode(true)}
          className={`p-1 rounded-full ${
            isDarkMode ? "bg-blue-600 text-white" : "dark:bg-gray-700"
          }`}
        >
          <MdNightlight className="text-lg" />
        </button>
      </div>
    </section>
  );
}
