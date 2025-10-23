import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
        <meta name="description" content="Deploy and manage your bots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8">𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</h1>
          <p className="text-xl mb-8">
            Deploy and manage your bots with ease. Secure, fast, and reliable.
          </p>
          <div className="space-x-4">
            <a
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold"
            >
              Login
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
