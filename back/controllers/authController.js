import bcrypt from 'bcrypt';
import { findUser, createUser } from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        res.send({message: 'Usuario y contraseña requeridos'})
    }
    try {
        const user = await findUser(username);

        if (!user) {
            return res.status(401).send({ message: 'El usuario no existe' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ message: 'Logeado con éxito', token });

    } catch (error) {
        res.status(500).send({ message: 'Error en el proceso de inicio de sesión' });
    }
}

export const register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Usuario y contraseña requeridos' });
    }

    try {
        const existingUser = await findUser(username);

        if (existingUser) {
            return res.status(409).send({ message: 'El usuario ya existe' });
        }

        await createUser(username, password);
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token generado para el nuevo usuario:', token);
        res.status(201).send({ message: 'Usuario registrado con éxito', token });

    } catch (error) {
        res.status(500).send({ message: 'Error en el proceso de registro' });
    }
};