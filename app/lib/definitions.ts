import { ObjectId } from "mongodb";

type TCategory = 'T-shirt' | 'Hoodies' | 'Shirt' | 'Pants' | 'Shoes' | 'Accessories';

export type TUser = {
    email: string;
    password: string;
    fullName: string;
    role: 'Admin' | 'User' | 'Staff',
}

export type TProduct = {
    name: string;
    categories: TCategory[];
    image: string[];
    variants: {
        color: Array<{
            name: string;
            available: boolean;
            stock: number;
            sold: number;
            price?: number; // Price at the color level (optional)
        }>;
        size: Array<{
            name: string;
            available: boolean;
            stock: number;
            sold: number;
            price?: number;
        }>;
    };
    basePrice: number; // Base price if not specified at the color or size level
    description: string;
    createdBy: ObjectId;
}