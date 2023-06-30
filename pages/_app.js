import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={
        theme === "light"
          ? "p-0 m-0 font-sans leading-6 text-lg bg-white text-black"
          : "p-0 m-0 font-sans leading-6 text-lg bg-gray-800 text-white"
      }
    >
      <button
        onClick={toggleTheme}
        className="py-2 px-4 bg-blue-600 text-white rounded"
      >
        Toggle Theme
      </button>
      <Component {...pageProps} />
    </div>
  );
}
