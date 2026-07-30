"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMsg(data.error || "Something went wrong.");
      }
    } catch (err) {
      setResponseMsg("Network issue! Message could not be sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">Have a query or want to book an event? Get in touch with us!</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form with Working Submission */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border rounded-xl shadow-sm">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full border rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-800"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full border rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-800"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              required
              rows={4}
              placeholder="How can we help you?"
              className="w-full border rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-800"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {responseMsg && (
            <p className="text-sm font-medium text-emerald-700">{responseMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-800 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-900 font-medium transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Location & Info */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 border rounded-xl">
            <h3 className="font-bold text-lg mb-2">Studio Location</h3>
            <p className="text-gray-600 text-sm">Guzel Meraki Studio, Main Boulevard, Pakistan</p>
          </div>
          <div className="p-6 bg-gray-50 border rounded-xl">
            <h3 className="font-bold text-lg mb-2">Direct Contact</h3>
            <p className="text-gray-600 text-sm">Phone: +92 329 4274637</p>
            <p className="text-gray-600 text-sm">Email: info@guzelmeraki.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}