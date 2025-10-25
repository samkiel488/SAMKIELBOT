import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <Head>
        <title>Privacy Policy - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
        <meta name="description" content="Privacy Policy for SAMKIEL BOT" />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            At Samkiel Bot, your privacy is important to us.
          </p>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li>We do not store or read any personal WhatsApp messages.</li>
            <li>
              Your credentials and access tokens are securely managed and never
              shared with third parties.
            </li>
            <li>
              We may collect limited usage data (like number of deployments) for
              performance monitoring.
            </li>
            <li>
              No user data is sold, rented, or shared with external
              organizations.
            </li>
            <li>
              We comply with standard data protection practices to ensure your
              information remains secure.
            </li>
          </ol>
          <p className="mb-8">
            By using this service, you consent to this privacy policy.
          </p>
        </div>
        <Link
          href="/"
          className="text-blue-500 dark:text-blue-400 hover:underline transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
