export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Guzel Meraki Studio</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We bring creativity and elegance to every celebration. Specializing in bespoke event styling, floral setups, and handcrafted decorative products, Guzel Meraki Studio transforms ordinary moments into unforgettable memories.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
          <div className="text-emerald-700 text-3xl font-bold mb-2">100+</div>
          <h3 className="font-semibold text-lg mb-1">Events Styled</h3>
          <p className="text-sm text-gray-600">From intimate gatherings to grand celebrations.</p>
        </div>
        <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
          <div className="text-emerald-700 text-3xl font-bold mb-2">100%</div>
          <h3 className="font-semibold text-lg mb-1">Custom Designs</h3>
          <p className="text-sm text-gray-600">Tailored decor themes according to client preference.</p>
        </div>
        <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
          <div className="text-emerald-700 text-3xl font-bold mb-2">Premium</div>
          <h3 className="font-semibold text-lg mb-1">Quality Decor</h3>
          <p className="text-sm text-gray-600">High quality products and flawless execution.</p>
        </div>
      </div>
    </main>
  );
}