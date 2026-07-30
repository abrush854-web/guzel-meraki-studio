export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-stone-50 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-800">
          Guzel Meraki Studio
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your weddings, birthdays, and special events with elegant
          decor and premium styling.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg">
            Shop Now
          </button>

          <button className="border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white px-6 py-3 rounded-lg">
            Book Event
          </button>
        </div>
      </div>
    </section>
  );
}