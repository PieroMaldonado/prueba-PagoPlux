import bcrypt from 'bcrypt';
import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const findUser = async (username) => {
    const pool = await getConnection();
    const query = 'SELECT TOP 1 * FROM Usuarios WHERE username = @username';
    const result = await pool.request()
        .input('username', sql.NVarChar, username)
        .query(query);
    
    return result.recordset.length > 0 ? result.recordset[0] : null;
};

export const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await getConnection();
    const query = 'INSERT INTO Usuarios (username, password) VALUES (@username, @password)';
    await pool.request()
        .input('username', sql.NVarChar, username)
        .input('password', sql.NVarChar, hashedPassword)
        .query(query);
};