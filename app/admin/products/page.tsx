import { prisma } from "@/lib/prisma";
import ProductTable from "@/components/admin/ProductTable";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">
        Admin - Products
      </h1>

      <ProductTable products={products} />
    </main>
  );
}