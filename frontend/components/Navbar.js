import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../lib/auth";
import { useTheme } from "../context/ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";
import { Sun, Moon, Monitor } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    toggleTheme(next);
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

          {/* Single Theme Toggle Icon */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ml-4"
            aria-label={`Current theme: ${theme}. Click to cycle themes.`}
          >
            {theme === "light" && <Sun size={20} />}
            {theme === "dark" && <Moon size={20} />}
            {theme === "system" && <Monitor size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Single Theme Toggle for Mobile */}
          <button
            onClick={handleToggleTheme}
            className="p-1 rounded text-gray-400 hover:text-white transition-colors"
            aria-label={`Current theme: ${theme}. Click to cycle themes.`}
          >
            {theme === "light" && <Sun size={16} />}
            {theme === "dark" && <Moon size={16} />}
            {theme === "system" && <Monitor size={16} />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay Hamburger Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 dark:bg-gray-800 shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
            <div className="p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white focus:outline-none mb-4"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
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
          </div>
        </>
      )}
    </nav>
  );
}
