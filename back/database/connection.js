import sql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
    user: process.env.DB_USER,          
    password: process.env.DB_PASSWORD,  
    server: process.env.DB_SERVER,      
    database: process.env.DB_DATABASE,  
    options: {
        encrypt: true,                  
        trustServerCertificate: true
    }
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Conectado a la base de datos SQL Server');
        return pool
    } catch (err) {
        console.error('Error en la conexión a la base de datos:', err);
    }
};