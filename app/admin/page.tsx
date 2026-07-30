"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("products");

 
  const [products, setProducts] = useState([
    { id: 1, name: "Wedding Decoration", price: 25000, stock: 10, category: "Wedding Decor" },
    { id: 2, name: "Birthday Theme Set", price: 12000, stock: 15, category: "Birthday Decor" },
    { id: 3, name: "Luxury Flower Vase", price: 5500, stock: 25, category: "Flower Arrangements" },
  ]);

  const [orders, setOrders] = useState([
    { id: "ORD-101", customer: "Ali Khan", total: 25000, status: "PAID", date: "2026-07-28" },
    { id: "ORD-102", customer: "Ayesha Ahmed", total: 12000, status: "PENDING", date: "2026-07-29" },
  ]);

  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "Hamza Malik", event: "Wedding", date: "2026-08-15", status: "New" },
    { id: 2, name: "Zainab Tariq", event: "Corporate Gala", date: "2026-08-20", status: "Contacted" },
  ]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">Admin Dashboard</h1>
          <p className="text-gray-600">Guzel Meraki Studio — Management Portal (Faisalabad)</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              activeTab === "products" ? "bg-emerald-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              activeTab === "orders" ? "bg-emerald-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              activeTab === "enquiries" ? "bg-emerald-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Event Enquiries
          </button>
        </div>
      </div>

      {/* Products Tab */}
      {activeTab === "products" && (
        <div className="bg-white rounded-2xl shadow-md border overflow-hidden p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Manage Products & Stock</h2>
            <Link href="/admin/products/new">
              <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition">
                + Add New Product
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">ID</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-3 font-medium">#{p.id}</td>
                    <td className="p-3 font-semibold text-gray-900">{p.name}</td>
                    <td className="p-3 text-gray-600">{p.category}</td>
                    <td className="p-3 font-medium text-emerald-700">Rs. {p.price}</td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        {p.stock} in stock
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === "orders" && (
        <div className="bg-white rounded-2xl shadow-md border overflow-hidden p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Orders & Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer Name</th>
                  <th className="p-3">Total Amount</th>
                  <th className="p-3">Payment Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50">
                    <td className="p-3 font-medium">{o.id}</td>
                    <td className="p-3 font-semibold text-gray-900">{o.customer}</td>
                    <td className="p-3 font-medium text-emerald-700">Rs. {o.total}</td>
                    <td className="p-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          o.status === "PAID" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td className="p-3 text-gray-500">{o.date}</td>
                    <td className="p-3 text-right">
                      <button className="text-emerald-800 font-medium hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Enquiries Tab */}
      {activeTab === "enquiries" && (
        <div className="bg-white rounded-2xl shadow-md border overflow-hidden p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Event Booking Enquiries</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">Customer Name</th>
                  <th className="p-3">Event Type</th>
                  <th className="p-3">Target Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {enquiries.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">{e.name}</td>
                    <td className="p-3 text-gray-700">{e.event}</td>
                    <td className="p-3 text-gray-500">{e.date}</td>
                    <td className="p-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        {e.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button className="text-amber-600 font-medium hover:underline">Respond</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}