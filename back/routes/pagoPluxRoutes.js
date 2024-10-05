import { getTransactionById } from '../controllers/pagoPluxController.js'
import { Router } from 'express'

const router = Router()

router.get('/transaction', getTransactionById)

export default router