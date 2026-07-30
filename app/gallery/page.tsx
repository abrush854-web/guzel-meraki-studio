export default function GalleryPage() {
  const photos = [
    {
      title: "Wedding Floral Stage",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Theme Birthday Party",
      category: "Birthdays",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Corporate Dinner Setup",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Outdoor Garden Decor",
      category: "Events",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Luxury Table Arrangement",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Handcrafted Gift Packing",
      category: "Gifting",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-gray-900">Event Gallery</h1>
        <p className="text-gray-600">A glance at our recent event setups, floral styling, and custom decorations.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Height reduced to h-48 for smaller images */}
            <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
              <img 
                src={photo.image} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                {photo.category}
              </span>
            </div>
            
            <div className="p-4 border-t">
              <h3 className="font-semibold text-gray-800 text-base group-hover:text-emerald-800 transition">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}