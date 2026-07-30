import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, image, category } = body;

    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        image,
        category,
      },
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ success: false, error: "Failed to create product" }, { status: 500 });
  }
}