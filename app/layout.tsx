import type { Metadata } from "next";
import "../app/globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/components/context/CartContext";

export const metadata: Metadata = {
  title: "Guzel Meraki Studio",
  description: "Premium Decor & Event Decoration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}