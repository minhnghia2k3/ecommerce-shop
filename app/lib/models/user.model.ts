import mongoose from 'mongoose'
import type { TUser } from '../definitions'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema<TUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    role: { type: String, enum: ['Admin', 'User', 'Staff'], default: 'User' },
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model<TUser>('User', UserSchema);
export default User;
