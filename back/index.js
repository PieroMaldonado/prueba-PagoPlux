import express from 'express'
import { getConnection} from './database/connection.js'
import dotenv from 'dotenv'
import loginRoutes from './routes/authRoutes.js'
import cors from 'cors';


dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

getConnection()

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hola mundo!</h1>')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

app.use(loginRoutes)
