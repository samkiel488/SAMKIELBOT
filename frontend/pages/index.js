import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../lib/auth';

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      window.location.href = '/dashboard';
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Head>
        <title>𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
        <meta name="description" content="Deploy and manage your bots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</h1>
        <nav className="space-x-6 text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/register" className="hover:text-white transition">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6 py-12">
        <h2 className="text-5xl font-extrabold mb-4">Deploy and Manage Your Bots Seamlessly</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
          Secure, fast, and reliable bot deployment powered by Samkiel’s automation framework.
        </p>
        <div className="flex space-x-4">
          <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </Link>
          <Link href="/login" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Login
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋. All rights reserved.</p>
        <p className="mt-2">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://samkiel.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Samkiel
          </a>
        </p>
      </footer>
    </div>
  );
}
