import mongoose, { Schema } from 'mongoose';
import type { TProduct, TCategory } from '../definitions';

enum CategoryEnum {
    TShirt = 'T-shirt',
    Hoodies = 'Hoodies',
    Shirt = 'Shirt',
    Pants = 'Pants',
    Shoes = 'Shoes',
    Accessories = 'Accessories'
}

// ['T-shirt', 'Hoodies', 'Shirt', 'Pants', 'Shoes', 'Accessories']
const TCategoryValues: TCategory[] = Object.values(CategoryEnum);

const ProductSchema = new mongoose.Schema<TProduct>({
    name: { type: String, required: true },
    rate: { type: Number, default: 0 },
    description: { type: String },
    categories: [{ type: String, enum: TCategoryValues, required: true }],
    unit_price: { type: Number, required: true },
    sale_price: { type: Number },
    image: [{ type: String, required: true }],
    size: {
        name: { type: String, required: true },
        available: { type: Boolean, required: true },
        stock: { type: Number, required: true }
    },
    sold: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true })

const Product = mongoose.models.Product || mongoose.model<TProduct>('Product', ProductSchema);
export default Product;