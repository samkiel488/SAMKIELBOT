export default function BotCard({ deployment }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'running':
        return 'bg-green-600';
      case 'stopped':
        return 'bg-red-600';
      case 'pending':
        return 'bg-yellow-600';
      case 'failed':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{deployment.botName}</h3>
        <span
          className={`px-2 py-1 rounded text-sm ${getStatusColor(
            deployment.status
          )}`}
        >
          {deployment.status}
        </span>
      </div>

      <p className="text-gray-400 mb-2">Version: {deployment.version}</p>
      <p className="text-gray-400 mb-4">
        Deployed: {new Date(deployment.deployedAt).toLocaleDateString()}
      </p>

      <div className="flex space-x-2">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          Update
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Stop
        </button>
      </div>
    </div>
  );
}
