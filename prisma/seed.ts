import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Luxury Flower Vase",
        price: 4500,
        image: "/images/products/vase.jpg",
        category: "Home Decor",
      },
      {
        name: "Wedding Decoration",
        price: 25000,
        image: "/images/products/wedding.jpg",
        category: "Wedding",
      },
      {
        name: "Birthday Decoration",
        price: 12000,
        image: "/images/products/birthday.jpg",
        category: "Birthday",
      },
      {
        name: "Corporate Event Setup",
        price: 30000,
        image: "/images/products/corporate.jpg",
        category: "Corporate",
      },
      {
        name: "Luxury Gift Box",
        price: 5500,
        image: "/images/products/gift.jpg",
        category: "Gift",
      },
      {
        name: "Home Decoration",
        price: 8000,
        image: "/images/products/home.jpg",
        category: "Home Decor",
      },
    ],
  });

  console.log("Products added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });