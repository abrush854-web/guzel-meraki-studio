import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    message: "Product deleted successfully",
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const product = await prisma.product.update({
    where: {
      id: Number(id),
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