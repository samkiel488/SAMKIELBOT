import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Privacy Policy - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
        <meta name="description" content="Privacy Policy for SAMKIEL BOT" />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">Your privacy is important to us at 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋.</p>
        <p className="mb-4">
          [Placeholder: Detailed privacy policy will be added here.]
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
