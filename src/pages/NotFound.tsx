import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h2 className="text-7xl font-bold text-indigo-400">404</h2>
      <p className="text-xl text-gray-300 mt-4">Page not found</p>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-8 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
