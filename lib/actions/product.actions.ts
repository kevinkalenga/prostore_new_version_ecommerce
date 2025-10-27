
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { PrismaClient } from "@prisma/client"
 import { convertToPlainObject } from '../utils';


// Get latest products 

export async function getLatestProducts() {
     const prisma = new PrismaClient();
    
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt: 'desc'}
    })

    // return data
     return convertToPlainObject(data)

}

// Get single product by it's slug 
