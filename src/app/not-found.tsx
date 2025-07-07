'use client'
import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-black mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist. Let's find your way back!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/jobs"
            className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            <Search size={20} />
            Browse Jobs
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mx-auto mt-6 transition-colors duration-200"
        >
          <ArrowLeft size={18} />
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;