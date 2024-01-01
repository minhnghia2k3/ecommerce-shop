import mongoose, { Schema } from 'mongoose';
import type { TOrder } from '../definitions';

// enum order status
enum OrderStatusEnum {
    Pending = 'Pending',
    Shipping = 'Shipping',
    Completed = 'Completed',
    Cancelled = 'Cancelled'
}

const OrderSchema = new mongoose.Schema<TOrder>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    information: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        notes: { type: String }
    },
    products: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
    }],
    status: { type: String, enum: Object.values(OrderStatusEnum), default: 'Pending' },
    orderDate: { type: Date, default: Date.now() },
}, { timestamps: true })

const Order = mongoose.models.Order || mongoose.model<TOrder>('Order', OrderSchema);
export default Order;