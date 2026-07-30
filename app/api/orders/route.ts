import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const order = await prisma.order.create({
      data: {
        customer: body.customer,
        email: body.email,
        phone: body.phone,
        address: body.address,
        total: parseFloat(body.total),
        status: "PENDING",
        paymentStatus: "UNPAID",
      
        items: body.items && body.items.length > 0 ? {
          create: body.items.map((item: any) => ({
            productId: item.productId ? Number(item.productId) : null,
            quantity: Number(item.quantity),
            price: parseFloat(item.price),
          })),
        } : undefined,
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error("Order Creation Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}