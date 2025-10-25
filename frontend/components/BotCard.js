export default function BotCard({ deployment }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return "bg-green-600";
      case "stopped":
        return "bg-red-600";
      case "pending":
        return "bg-yellow-600";
      case "failed":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/40 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {deployment.botName}
        </h3>
        <span
          className={`px-2 py-1 rounded text-sm text-white ${getStatusColor(
            deployment.status
          )}`}
        >
          {deployment.status}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Version: {deployment.version}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Deployed: {new Date(deployment.deployedAt).toLocaleDateString()}
      </p>

      <div className="flex space-x-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          Update
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          Stop
        </button>
      </div>
    </div>
  );
}
