'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams for accessing query params

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  // Get the redirectUrl from query parameters
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirectUrl'); // Vulnerable parameter

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded user credentials (admin, syauqi, surya)
    const users = [
      { username: 'admin', password: 'adminpassword' },
      { username: 'syauqi', password: 'syauqipassword' },
      { username: 'surya', password: 'suryapassword' },
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // If redirectUrl exists, use it, otherwise go to the home page
      if (redirectUrl) {
        router.push(redirectUrl); // Vulnerable redirect
      } else {
        router.push('/home'); // Default redirect to home
      }
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle navigating back to the home page
  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
            <button
              type="button"
              onClick={handleBackToHome}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
