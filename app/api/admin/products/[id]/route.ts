import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await prisma.product.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({
    message: "Product deleted successfully",
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const product = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      price: Number(body.price),
      image: body.image,
      category: body.category,
    },
  });

  return NextResponse.json(product);
}