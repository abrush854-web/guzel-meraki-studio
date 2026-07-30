"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductTable({
  products,
}: {
  products: Product[];
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  async function handleDelete(id: number) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/admin/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Product deleted successfully!");
      router.refresh();
    } else {
      alert("Failed to delete product.");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded mb-5"
      />

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        className="w-full border p-3 rounded mb-5"
      >
        <option value="All">All Categories</option>
        <option value="Home Decor">
          Home Decor
        </option>
        <option value="Flowers">Flowers</option>
        <option value="Lighting">Lighting</option>
        <option value="Wedding">Wedding</option>
      </select>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">Image</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products
            .filter((product) =>
              product.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .filter((product) =>
              selectedCategory === "All"
                ? true
                : product.category === selectedCategory
            )
            .map((product) => (
              <tr key={product.id}>
                <td className="border p-3">
                  {product.id}
                </td>

                <td className="border p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>

                <td className="border p-3">
                  {product.name}
                </td>

                <td className="border p-3">
                  {product.category}
                </td>

                <td className="border p-3">
                  Rs. {product.price}
                </td>

                <td className="border p-3 space-x-2">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="bg-blue-600 text-white px-3 py-2 rounded inline-block"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(product.id)
                    }
                    className="bg-red-600 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}