"use client";

import Link from "next/link";
import { useCart } from "@/components/context/CartContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents Link navigation when clicking the button
    addToCart({ id, name, price, image });
    alert(`${name} has been added to cart successfully!`);
  };

  return (
    <Link href={`/shop/${id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-bold text-black">
            {name}
          </h2>

          <p className="text-gray-600 mt-2">
            Premium decorative product.
          </p>

          <h3 className="text-2xl font-bold text-emerald-700 mt-4">
            Rs. {price}
          </h3>

          <button 
            onClick={handleAddToCart} 
            className="w-full mt-5 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}