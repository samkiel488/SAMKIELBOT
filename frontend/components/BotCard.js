import { Eye, RotateCcw, Square } from "lucide-react";

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

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "running":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "stopped":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/40 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
            {deployment.botName}
          </h3>
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
              deployment.status
            )}`}
          >
            {deployment.status}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          <span className="font-medium">Version:</span> {deployment.version}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          <span className="font-medium">Last Updated:</span>{" "}
          {new Date(
            deployment.updatedAt || deployment.deployedAt
          ).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
          <Eye size={16} className="mr-1" />
          View Details
        </button>
        <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
          <RotateCcw size={16} className="mr-1" />
          Restart
        </button>
        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
          <Square size={16} className="mr-1" />
          Stop
        </button>
      </div>
    </div>
  );
}
