'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [redirectUrl, setRedirectUrl] = useState<string>('');

  // Hardcoded user credentials
  const users = [
    { username: 'admin', password: 'adminpassword' },
    { username: 'syauqi', password: 'syauqipassword' },
    { username: 'surya', password: 'suryapassword' },
  ];

  // Get redirect URL from query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      console.log("Redirect URL:", redirect); // Log to check
      setRedirectUrl(decodeURIComponent(redirect)); // Decode the URL
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Store login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      
      // Validate the redirect URL to ensure it's an absolute URL (http or https)
      if (redirectUrl) {
        router.push(redirectUrl); // Redirect to the malicious URL
      } else {
        // If no valid redirectUrl, or if it's not an external URL, redirect to '/services' by default
        router.push('/services');
      }
    } else {
      alert('Invalid credentials');
    }
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
          </div>
        </form>
      </div>
    </div>
  );
}
