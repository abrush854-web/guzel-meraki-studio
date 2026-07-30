import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">
          Guzel Meraki Studio
        </h1>

        <ul className="flex gap-6 items-center">

          <li><Link href="/">Home</Link></li>

          <li><Link href="/about">About</Link></li>

          <li><Link href="/shop">Shop</Link></li>

          <li><Link href="/events">Events</Link></li>

          <li><Link href="/gallery">Gallery</Link></li>

          <li><Link href="/contact">Contact</Link></li>

          <li><Link href="/cart">Cart</Link></li>

          <li><Link href="/checkout">Checkout</Link></li>

          {/* Admin Dashboard Link */}
          <li>
            <Link 
              href="/admin" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
            >
              Admin Dashboard
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}