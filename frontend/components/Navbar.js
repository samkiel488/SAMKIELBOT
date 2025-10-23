import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('token');

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋
        </Link>

        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-blue-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-400">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-400">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
