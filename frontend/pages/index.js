import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Flipkart Clone</h1>
          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
            />
          </div>
          <div className="space-x-4 flex items-center">
            <button className="bg-yellow-400 px-4 py-2 rounded-md text-black font-medium">Login</button>
            <button className="hover:underline">Cart</button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-yellow-200 to-orange-400 h-48 flex items-center justify-center text-3xl font-bold text-gray-800">
        Big Sale - Flat 50% Off!
      </div>

      {/* Products */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Top Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="h-40 w-full object-contain mb-3" />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
