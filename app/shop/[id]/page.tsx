"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/components/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductDetails() {
  const params = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }

    getProduct();
  }, [params.id]);

  if (!product) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl"
        />

        <div>
          <h1 className="text-5xl font-bold text-black">
            {product.name}
          </h1>

          <p className="text-3xl text-emerald-700 font-bold mt-5">
            Rs. {product.price}
          </p>

          <p className="text-gray-600 mt-6">
            Premium decor product for weddings,
            birthdays, home decoration and events.
          </p>

          <button
            onClick={() => {
              alert("Product Added!");

              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              });
            }}
            className="mt-8 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}