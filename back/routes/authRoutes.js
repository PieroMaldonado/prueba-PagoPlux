import { Router } from 'express'
import { login, register, validateToken } from '../controllers/authController.js'

const router = Router()

router.post('/login', login)

router.post('/register', register)

router.get('/validate-token', validateToken)

export default router