import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUser, createUser } from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const loginService = async (username, password) => {
    if (!username || !password) {
        return { status: 400, data: { message: 'Usuario y contraseña requeridos' } };
    }

    const user = await findUser(username);
    if (!user) {
        return { status: 401, data: { message: 'El usuario no existe' } };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return { status: 401, data: { message: 'Contraseña incorrecta' } };
    }

    const token = generateToken(user);
    return { status: 200, data: { token } };
};

export const registerService = async (username, password) => {
    if (!username || !password) {
        return { status: 400, data: { message: 'Usuario y contraseña requeridos' } };
    }

    const existingUser = await findUser(username);
    if (existingUser) {
        return { status: 409, data: { message: 'El usuario ya existe' } };
    }

    await createUser(username, password);
    const token = generateToken({ username });
    return { status: 201, data: { token } };
};

const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};