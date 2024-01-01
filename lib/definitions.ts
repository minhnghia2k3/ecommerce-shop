import { ObjectId } from "mongodb";

export type TCategory = 'T-shirt' | 'Hoodies' | 'Shirt' | 'Pants' | 'Shoes' | 'Accessories';

type TOrderStatus = 'Pending' | 'Shipping' | 'Completed' | 'Cancelled';

export type TUser = {
    email: string;
    password: string;
    fullName: string;
    phone?: string;
    role: 'Admin' | 'Customer' | 'Staff',
}

export type TProduct = {
    name: string;
    rate?: number;
    description?: string;
    categories: TCategory[];
    unit_price: number;
    sale_price?: number;
    image: string[];
    size: {
        name: string;
        available: boolean;
        stock: number;
    }
    sold?: number;
    createdBy: ObjectId;
}

export type TOrder = {
    userId: ObjectId;
    information: {
        name: string;
        address: string;
        phone: string;
        email: string;
        notes?: string;
    }
    products: Array<{
        productId: ObjectId;
        quantity: number;
        size: string;
    }>;
    status: TOrderStatus;
    orderDate: Date;
}

export type TRevenue = {
    month: number;
    year: number;
    totalRevenue: number;
}

export type TTransaction = {
    user: ObjectId;
    orderId: ObjectId;
}