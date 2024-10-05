import { getTransactionById } from '../controllers/pagoPluxController.js'
import { Router } from 'express'
import { verifyToken } from '../util/token.js'

const router = Router()

router.get('/transaction', verifyToken, getTransactionById)

export default router