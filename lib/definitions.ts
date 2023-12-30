import { ObjectId } from "mongodb";

export type TCategory = 'T-shirt' | 'Hoodies' | 'Shirt' | 'Pants' | 'Shoes' | 'Accessories';

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


type TProductVariant = {
    color: string;
    size: string;
    stock?: number;
    sold?: number;
    price?: number;
}

export type TRevenue = {
    month: number;
    year: number;
    totalRevenue: number;
}

export type TTransaction = {
    user: ObjectId;
    products: Array<{
        product: ObjectId;
        quantity: number;

    }>
    receiverName: string;
    address: string;
    phone: string;
    email: string;
    description?: string;
    method: 'COD' | 'Bank Transfer';
    shippingFee: number;
    totalPrice: number;
    status: 'Pending' | 'Shipping' | 'Completed' | 'Cancelled';
}