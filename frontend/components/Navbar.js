import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../lib/auth";
import { applyTheme } from "../lib/theme";
import { HiMenu, HiX, HiSun, HiMoon, HiDesktopComputer } from "react-icons/hi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (savedTheme === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center space-x-3"
        >
          <Image
            src="/SAMKIELBOT-LOGO.png"
            alt="SAMKIEL BOT Logo"
            width={40}
            height={40}
            className="-mt-1"
          />
          <span className="text-white dark:text-white text-xl font-bold">
            𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href={user ? "/dashboard" : "/"}
            className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              >
                Register
              </Link>
            </>
          )}

          {/* Theme Toggle Buttons */}
          <div className="flex space-x-1 ml-4">
            <button
              onClick={() => handleThemeChange("light")}
              className={`p-2 rounded-lg transition-colors ${
                theme === "light"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              aria-label="Light mode"
            >
              <HiSun size={20} />
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              aria-label="Dark mode"
            >
              <HiMoon size={20} />
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className={`p-2 rounded-lg transition-colors ${
                theme === "system"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              aria-label="System mode"
            >
              <HiDesktopComputer size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle for Mobile */}
          <div className="flex space-x-1">
            <button
              onClick={() => handleThemeChange("light")}
              className={`p-1 rounded transition-colors ${
                theme === "light"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Light mode"
            >
              <HiSun size={16} />
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className={`p-1 rounded transition-colors ${
                theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Dark mode"
            >
              <HiMoon size={16} />
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className={`p-1 rounded transition-colors ${
                theme === "system"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="System mode"
            >
              <HiDesktopComputer size={16} />
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-800 mt-4 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href={user ? "/dashboard" : "/"}
              className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
