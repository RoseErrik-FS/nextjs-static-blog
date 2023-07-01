import { useState } from "react";
import "../styles/globals.css";
import { FaSun, FaMoon } from "react-icons/fa";

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
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="py-2 px-4 bg-blue-600 text-white rounded flex items-center"
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
          <span className="ml-2">
            Toggle {theme === "light" ? "Dark" : "Light"}
          </span>
        </button>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
