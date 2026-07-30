"use client";

import Link from "next/link";
import { useCart } from "@/components/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-black">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-6">
            Your cart is empty.
          </p>

          <Link
            href="/shop"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white rounded-xl shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-black">
                    {item.name}
                  </h2>

                  <p className="text-gray-600">
                    Rs. {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 text-white w-8 h-8 rounded"
                    >
                      -
                    </button>

                    <span className="font-bold text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-600 text-white w-8 h-8 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <h3 className="text-xl font-bold text-emerald-700">
                    Rs. {item.price * item.quantity}
                  </h3>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-10">
            <h2 className="text-3xl font-bold text-black">
              Total
            </h2>

            <h2 className="text-3xl font-bold text-emerald-700">
              Rs. {total}
            </h2>
          </div>

          <Link
            href="/checkout"
            className="block mt-8 text-center bg-emerald-700 text-white py-4 rounded-lg hover:bg-emerald-800"
          >
            Proceed To Checkout
          </Link>
        </>
      )}
    </main>
  );
}