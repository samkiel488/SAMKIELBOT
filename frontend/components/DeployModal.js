import { useState } from 'react';
import { deployBot } from '../lib/api';

export default function DeployModal({ onClose }) {
  const [formData, setFormData] = useState({
    botName: '',
    version: '1.0.0',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await deployBot(formData);
      onClose();
    } catch (error) {
      setError(error.response?.data?.error || 'Deployment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Deploy New Bot</h2>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Bot Name</label>
            <input
              type="text"
              name="botName"
              value={formData.botName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Version</label>
            <input
              type="text"
              name="version"
              value={formData.version}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 px-4 py-2 rounded font-semibold"
            >
              {loading ? 'Deploying...' : 'Deploy'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
