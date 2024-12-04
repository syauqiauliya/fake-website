'use client';

import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    // Ensure it goes back to the logged-in home page
    router.push('/home');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Services</h1>
      <p className="text-md text-gray-700 mb-6">Explore our services now that you're logged in!</p>
      
      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md"
      >
        Back to Dashboard
      </button>

      {/* Add the services table or other content */}
      <table className="min-w-full mt-6">
        <thead>
          <tr>
            <th className="p-4 border">Service</th>
            <th className="p-4 border">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">Service 1</td>
            <td className="p-4 border">$100</td>
          </tr>
          <tr>
            <td className="p-4 border">Service 2</td>
            <td className="p-4 border">$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServicesPage;
