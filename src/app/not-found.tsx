// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-orange-500 text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
    <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
