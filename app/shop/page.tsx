"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../../components/context/CartContext";

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Products</h1>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const productId = product.id || product._id;
            return (
              <div
                key={productId}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col justify-between relative z-10"
              >
                <div>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-emerald-700 font-extrabold text-lg">Rs. {product.price}</p>
                </div>

                <div className="mt-4 flex gap-2 relative z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: productId,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      });
                      alert("Product added to cart successfully!");
                    }}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl transition text-center cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href="/checkout"
                    className="flex-1 text-center bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-xl transition flex items-center justify-center cursor-pointer"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}