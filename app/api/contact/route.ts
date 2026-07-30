import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      { message: "Thank you! Your message has been sent successfully.", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error! Please try again." },
      { status: 500 }
    );
  }
}