import { TRevenue } from "../definitions";
import mongoose from 'mongoose';

const RevenueSchema = new mongoose.Schema<TRevenue>({
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    totalRevenue: { type: Number, default: 0 }
})

const Revenue = mongoose.models.Revenue || mongoose.model<TRevenue>('Revenue', RevenueSchema);

export default Revenue;