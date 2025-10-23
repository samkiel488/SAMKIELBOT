import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotCard from '../components/BotCard';
import DeployModal from '../components/DeployModal';
import { getDeployments } from '../lib/api';

export default function Dashboard() {
  const [deployments, setDeployments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeployments();
  }, []);

  const fetchDeployments = async () => {
    try {
      const data = await getDeployments();
      setDeployments(data);
    } catch (error) {
      console.error('Error fetching deployments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeploy = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    fetchDeployments(); // Refresh deployments after deploy
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Dashboard - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleDeploy}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold"
          >
            Deploy New Bot
          </button>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployments.map((deployment) => (
              <BotCard key={deployment._id} deployment={deployment} />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {showModal && <DeployModal onClose={handleModalClose} />}
    </div>
  );
}
