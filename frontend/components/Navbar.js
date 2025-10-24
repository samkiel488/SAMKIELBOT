import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../lib/auth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
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
          />
          <span className="text-white text-xl font-bold">𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</span>
        </Link>

        <div className="space-x-4">
          <Link
            href={user ? "/dashboard" : "/"}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
