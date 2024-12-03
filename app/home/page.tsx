// app/home.tsx
'use client'

import { useRouter } from 'next/navigation';
import ServicesCarousel from '/Users/syauqimuhammad/Documents/KULIAH/SEM4/SEM5(7)/Kemjar/Praktikum/Project/fake-website/components/servicesCarousel.tsx'; // Import the carousel component

export default function Home() {
  const router = useRouter();

  // Handle logging out (redirecting to the login page)
  const handleLogout = () => {
    // For demo purposes, we'll simply redirect back to login
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to the Home Page</h2>
        <p className="text-gray-700 text-center mb-6">You have successfully logged in! Explore our amazing services below:</p>
        
        {/* Services Carousel */}
        <ServicesCarousel />
        
        {/* Logout button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
