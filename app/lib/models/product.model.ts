import mongoose, { Schema } from 'mongoose';
import type { TProduct } from '../definitions';

enum CategoryEnum {
    TShirt = 'T-shirt',
    Hoodies = 'Hoodies',
    Shirt = 'Shirt',
    Pants = 'Pants',
    Shoes = 'Shoes',
    Accessories = 'Accessories'
}

const ProductSchema = new mongoose.Schema<TProduct>({
    name: { type: String, required: true },
    categories: [{ type: String, enum: Object.values(CategoryEnum) }],
    image: [{ type: String }],
    variants: {
        color: [{
            name: { type: String },
            available: { type: Boolean },
            stock: { type: Number },
            sold: { type: Number },
            price: { type: Number }
        }],
        size: [{
            name: { type: String },
            available: { type: Boolean },
            stock: { type: Number },
            sold: { type: Number },
            price: { type: Number }
        }],
    },
    basePrice: { type: Number, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Product = mongoose.models.Product || mongoose.model<TProduct>('Product', ProductSchema);
export default Product;