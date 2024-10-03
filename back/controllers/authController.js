import bcrypt from 'bcrypt';
import { getConnection } from '../database/connection.js';
import sql  from 'mssql';
import { findUser, createUser } from '../models/userModel.js';

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
            console.log('Contraseña incorrecta para el usuario:', username);
            return res.status(401).send({ message: 'Contraseña incorrectos' });
        }

        res.send({ message: 'Logeado con éxito' });

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
        res.status(201).send({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).send({ message: 'Error en el proceso de registro' });
    }
};