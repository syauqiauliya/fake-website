'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Handle logging out (redirecting to the login page)
  const handleLogout = () => {
    // For demo purposes, we'll simply redirect back to login
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
        <p className="text-gray-700 mb-6">You have successfully logged in!</p>
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
