import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/Footer";
import BotCard from "../components/BotCard";
import StatsOverview from "../components/StatsOverview";
import NotificationDropdown from "../components/NotificationDropdown";
import UserAvatarDropdown from "../components/UserAvatarDropdown";
import { getDeployments } from "../lib/api";
import { useAuth } from "../lib/auth";
import { Bell, Plus } from "lucide-react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [deployments, setDeployments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
      return;
    }

    if (user) {
    if (user) {
    }
      fetchDeployments();

      // Show welcome toast for first-time users
      if (!user.profileImage) {
        toast(
          <div>
            <div className="font-semibold">🎉 Welcome to SAMKIEL BOT!</div>
            <div className="text-sm mt-1">
              Join our WhatsApp community for updates.
            </div>
            <a
              href="https://whatsapp.com/channel/0029VbAhWo3C6Zvf2t4Rne0h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm underline"
            >
              Join Now
            </a>
          </div>,
          {
            duration: 8000,
            icon: "🎉",
          }
        );
      }
    }
  }, [user, authLoading, router]);

  const fetchDeployments = async () => {
    try {
      const data = await getDeployments();
      setDeployments(data);
    } catch (error) {
      console.error("Error fetching deployments:", error);
    } finally {
      setLoading(false);
    }
  };

  // Remove old modal handlers since we now navigate to /deploy

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Dashboard - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
      </Head>

      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                Welcome back, {user.fullName || user.username} 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Manage and monitor your bot deployments easily.
              </p>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Bell
                    size={24}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
                {showNotifications && (
                  <NotificationDropdown
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>

              {/* User Avatar */}
              <UserAvatarDropdown user={user} />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-32 pb-8 md:pb-16">
        {/* Stats Overview */}
        <StatsOverview deployments={deployments} />

        {/* Deploy Button beside stats */}
        <div className="flex justify-end mb-6">
          <Link
            href="/deploy"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-white shadow-lg"
          >
            <Plus size={20} className="mr-2" />
            Deploy Bot
          </Link>
        </div>

        {/* Mobile Deploy Button */}
        <div className="md:hidden fixed bottom-6 right-6 z-40">
          <Link
            href="/deploy"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 text-white"
          >
            <Plus size={24} />
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Loading deployments...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployments.map((deployment) => (
              <BotCard key={deployment._id} deployment={deployment} />
            ))}
            {deployments.length === 0 && (
              <div className="col-span-full text-center py-16">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700/40 p-8 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    No deployments yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Create your first bot deployment to get started!
                  </p>
                  <Link
                    href="/deploy"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg font-semibold transition-all duration-200"
                  >
                    Deploy Your First Bot
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />

      {/* Remove old modal since we now navigate to /deploy */}
    </div>
  );
}
