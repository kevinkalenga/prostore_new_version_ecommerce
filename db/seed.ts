// import { PrismaClient } from '../lib/generated/prisma';
// import { PrismaClient } from '../lib/generated/prisma/index.js';
// import sampleData from './sample-data' 


// async function main() {
//     const prisma = new PrismaClient()
//     await prisma.product.deleteMany()

//     await prisma.product.createMany({data: sampleData.products})

//     console.log("db seeded successfully!")
// }
// main()


import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("db seeded successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
