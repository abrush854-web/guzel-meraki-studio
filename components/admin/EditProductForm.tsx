"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function EditProductForm({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(product.category);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/admin/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image,
        category,
      }),
    });

    if (res.ok) {
      alert("Product Updated Successfully!");
      router.push("/admin/products");
      router.refresh();
    } else {
      const error = await res.text();
      console.log(error);
      alert("Failed to update product.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Update Product
      </button>
    </form>
  );
}