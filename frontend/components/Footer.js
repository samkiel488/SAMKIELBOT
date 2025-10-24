import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Made with ❤️ by SAMKIEL
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Register
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
