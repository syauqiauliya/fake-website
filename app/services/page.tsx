// app/services/buy-now.tsx
const BuyNow = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Buy Now</h1>
      <p className="text-lg text-gray-700 mb-6">Choose the service you’d like to purchase and proceed with the payment!</p>

      <h3 className="text-xl font-semibold mb-4">Service 1: Advanced AI Integration 🤖</h3>
      <p className="text-md text-gray-700 mb-6">Boosts your system’s AI by 200%</p>

      <h3 className="text-xl font-semibold mb-4">Service 2: Quantum Computing Solutions ⚛️</h3>
      <p className="text-md text-gray-700 mb-6">Unlocks the power of quantum computing!</p>

      <h3 className="text-xl font-semibold mb-4">Service 3: Blockchain TrustTech 🔒</h3>
      <p className="text-md text-gray-700 mb-6">Provides top-notch blockchain security for all transactions</p>

      <h3 className="text-xl font-semibold mb-4">Service 4: Cloud-Based Innovation ☁️</h3>
      <p className="text-md text-gray-700 mb-6">Expands your Cloud flexibility across platforms</p>

      <h3 className="text-xl font-semibold mb-4">Service 5: Autonomous Data Processing 🧠</h3>
      <p className="text-md text-gray-700 mb-6">Streamlines data for a seamless experience</p>

      <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BuyNow;
