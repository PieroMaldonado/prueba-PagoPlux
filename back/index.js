import express from 'express'

const app = express()

const PORT = PROSS.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Hola mundo!</h1>')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})