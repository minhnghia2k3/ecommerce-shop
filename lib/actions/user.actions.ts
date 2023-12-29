"use server";
import User from "../models/user.model";
import type { TUser } from "../definitions";
import { connectToDB } from "../mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { unstable_noStore as noStore } from "next/cache";

const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}

export const fetchAllUsers = async () => {
    try {
        await connectToDB();
        const users = await User.find();

        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
}


export const signup = async (formData: FormData) => {
    try {
        await connectToDB();

        // Get data from FormData
        const email = formData.get('email');
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword');
        const fullName = formData.get('fullName');

        // Validate data
        const userExists = await User.findOne({ email: email });
        if (userExists) throw new Error('User already exists.');

        if (password !== confirmPassword) throw new Error('Passwords do not match.')

        const hash = await hashPassword(password);

        const user: TUser = await User.create({
            email, password: hash, fullName
        })
        return JSON.stringify(user);
    } catch (error: any) {
        throw new Error(error.message);
    }
}

/**
 * Action login user
 */
export const login = async (formData: FormData) => {
    try {
        await connectToDB();

        // Get data from FormData
        const email = formData.get('email');
        const password = formData.get('password') as string

        // Check if email exist?
        const user = await User.findOne({ email: email });
        if (!user) throw new Error('Invalid email or password.');

        // Compare password
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) throw new Error('Invalid email or password.');


    } catch (error: any) {
        throw new Error(error.message);
    }
}