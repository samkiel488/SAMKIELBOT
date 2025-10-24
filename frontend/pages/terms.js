import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Terms of Service - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
        <meta name="description" content="Terms of Service for SAMKIEL BOT" />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">
          Welcome to 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋. By using our service, you agree to these
          terms.
        </p>
        <p className="mb-4">
          [Placeholder: Detailed terms will be added here.]
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
