"use client";

import { useCart } from "@/components/context/CartContext";

export default function EventsPage() {
  const { addToCart } = useCart();

  const eventServices = [
    {
      id: 101,
      name: "Wedding Decoration",
      description: "Bespoke stage designs, floral archways, entry pathways, and thematic bridal setups.",
      features: ["Custom Floral Arrangements", "Stage & Backdrop Lighting", "Table & Seating Decor"],
      price: 25000,
      startingPrice: "Rs. 25,000",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 102,
      name: "Birthday Decoration",
      description: "Custom theme setups, balloon arches, backdrop banners, and cake table styling.",
      features: ["Theme-based Props", "Balloon Sculptures", "Welcome Board Styling"],
      price: 12000,
      startingPrice: "Rs. 12,000",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 103,
      name: "Corporate Event Setup",
      description: "Professional ambiance, stage setups, podium styling, and branded backdrop designs.",
      features: ["Sponsor Wall Setups", "Professional Lighting", "AV & Seating Arrangements"],
      price: 30000,
      startingPrice: "Rs. 30,000",
      badge: "Corporate",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 104,
      name: "Luxury Gift Boxes",
      description: "Customized aesthetic hampers and handcrafted gift packing for special event guests.",
      features: ["Personalized Greeting Cards", "Custom Ribbon Packaging", "Premium Material Finish"],
      price: 5500,
      startingPrice: "Rs. 5,500",
      badge: "Gifting",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 105,
      name: "Home Decoration",
      description: "Intimate home event setups, dholki arrangements, and private dinner table decor.",
      features: ["Cozy Aesthetic Lighting", "Traditional & Modern Fusion", "Compact Space Optimization"],
      price: 8000,
      startingPrice: "Rs. 8,000",
      badge: "Private Events",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 106,
      name: "Luxury Flower Vases",
      description: "Fresh and artificial floral table centerpieces designed to elevate any venue atmosphere.",
      features: ["Imported Floral Picks", "Custom Glassware & Vases", "Scented Accent Details"],
      price: 5500,
      startingPrice: "Rs. 5,500",
      badge: "Centerpieces",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const handleAddToCart = (service: any) => {
    addToCart(service);
    alert(`${service.name} has been added to cart successfully!`);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900">Our Event Decor Services</h1>
        <p className="text-gray-600 text-lg">
          Transforming your special occasions into unforgettable luxury experiences with handcrafted themes and floral setups near Kohinoor City, Faisalabad.
        </p>
      </div>

      {/* Services Grid with Images */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
                <span className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {service.startingPrice}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="border-t pt-4 mb-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Included Features</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => handleAddToCart(service)}
                className="w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-xl transition shadow"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}