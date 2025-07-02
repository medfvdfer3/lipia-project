"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: Omit<ErrorPageProps, 'error'>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="space-x-2">
          <button
            onClick={reset}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
