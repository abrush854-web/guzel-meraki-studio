import Categories from "@/components/home/Categories";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Dynamic Hero Banner */}
      <section className="relative bg-emerald-900 text-white py-24 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')` }}
        ></div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-amber-400/30 uppercase tracking-widest">
            Bespoke Event Styling & Decor
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Guzel Meraki Studio
          </h1>

          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            Transforming your special occasions into unforgettable luxury experiences with handcrafted themes and floral setups.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/shop"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition"
            >
              Shop Now
            </Link>
            <Link
              href="/events"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Component */}
      <Categories />
    </>
  );
}