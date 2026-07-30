import { prisma } from "@/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard - All Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                  <h2 className="text-lg font-bold">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    Customer: <span className="font-semibold text-black">{order.customer}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Email: {order.email} | Phone: {order.phone}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-700">
                    Rs. {order.total ?? order.totalAmount ?? 0}
                  </p>
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-semibold mt-1">
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700">Delivery Address:</p>
                <p className="text-sm text-gray-600">{order.address}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Items Ordered:</p>
                <ul className="divide-y border rounded-lg p-3 bg-gray-50 text-sm">
                  {order.items.map((item: any) => (
                    <li key={item.id} className="py-2 flex justify-between">
                      <span>
                        {item.product?.name ?? "Product"} (x{item.quantity})
                      </span>
                      <span className="font-medium">Rs. {item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}