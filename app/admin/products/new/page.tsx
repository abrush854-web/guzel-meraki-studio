"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        image,
        category,
      }),
    });

    if (res.ok) {
      alert("Product Added Successfully!");

      setName("");
      setPrice("");
      setImage("");
      setCategory("");
    } else {
      alert("Failed to add product.");
    }
  };

  return (
    <main className="max-w-xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-3 rounded"
        >
          Add Product
        </button>
      </form>
    </main>
  );
}