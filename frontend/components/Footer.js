import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAuth } from "../lib/auth";

export default function Footer() {
  const { user } = useAuth();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 px-6 py-10 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                Home
              </Link>
              {!user && (
                <>
                  <Link
                    href="/login"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    Register
                  </Link>
                </>
              )}
              {user && (
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Column 2: Legal */}
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">
              Legal
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/samkiel488"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
          © 2025 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋. All rights reserved. <br />
          Made with ❤️ by{" "}
          <a
            href="https://www.samkiel.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            SAMKIEL
          </a>
        </div>
      </div>
    </footer>
  );
}
