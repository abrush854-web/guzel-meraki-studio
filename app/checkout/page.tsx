"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../components/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart: cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: formData.customer,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          total: total,
          items: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity || 1,
            price: item.price,
          })),
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Order successfully placed! Order ID: " + (data.order?.id || data.order?._id));
        localStorage.removeItem("cart");
        router.push("/");
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {cartItems.length > 0 && (
        <div className="mb-8 bg-gray-50 p-4 rounded-xl border">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center gap-4">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                )}
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Rs. {item.price} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                  <button type="button" onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded text-sm">-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button type="button" onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded text-sm">+</button>
                </div>
                <button type="button" onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="customer"
          placeholder="Full Name"
          required
          value={formData.customer}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          required
          rows={4}
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <div className="text-xl font-semibold my-4">
          Total Amount: RS {total}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-700 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 disabled:bg-gray-400"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </main>
  );
}