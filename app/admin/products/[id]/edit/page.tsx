import { prisma } from "@/lib/prisma";
import EditProductForm from "@/components/admin/EditProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return (
      <main className="max-w-xl mx-auto py-16">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">
        Edit Product
      </h1>

      <EditProductForm product={product} />
    </main>
  );
}