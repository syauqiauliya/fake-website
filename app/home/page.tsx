'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If logged in, stay on the home page
    if (isLoggedIn) {
      return; // Don't redirect
    }

    // If not logged in, go to login page
    router.push('/login');
  }, [router]);

  // Function to handle logout
  const handleLogout = () => {
    // Clear the login status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the initial home page
    router.push('/');
  };

  // Function to navigate to services page
  const handleGoToServices = () => {
    router.push('/services');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
        <p className="text-md text-gray-700 mb-6">You are logged in! From here, you can explore our services or log out.</p>

        <div className="flex space-x-4">
          {/* Services button */}
          <button
            onClick={handleGoToServices}
            className="px-6 py-3 bg-blue-500 text-white rounded-md"
          >
            Go to Services
          </button>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
