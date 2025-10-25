import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../lib/auth";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 shadow-sm border-gray-200 dark:border-gray-700"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <span className="text-gray-800 dark:text-gray-100 text-xl font-bold">
            𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-gray-800 dark:text-gray-100">
          <Link
            href={user ? "/dashboard" : "/"}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Register
              </Link>
            </>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={() => {
              const next =
                theme === "light"
                  ? "dark"
                  : theme === "dark"
                  ? "system"
                  : "light";
              toggleTheme(next);
            }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Sun size={20} className="text-yellow-500" />
            ) : theme === "dark" ? (
              <Moon size={20} className="text-blue-400" />
            ) : (
              <Monitor size={20} className="text-gray-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-3">
          <Link
            href={user ? "/dashboard" : "/"}
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Register
              </Link>
            </>
          )}

          {/* Theme Toggle inside dropdown */}
          <button
            onClick={() => {
              const next =
                theme === "light"
                  ? "dark"
                  : theme === "dark"
                  ? "system"
                  : "light";
              toggleTheme(next);
            }}
            className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition-colors"
          >
            Switch Theme ({theme})
          </button>
        </div>
      )}
    </nav>
  );
}
