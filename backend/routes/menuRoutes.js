import express from 'express'
import { createOneMenu, deleteOneMenu, getAllMenus, getOneMenu, updateOneMenu } from '../controllers/menuController.js'

const router = express.Router()

router.post('/create', createOneMenu)
router.get('/', getAllMenus)
router.get('/:id', getOneMenu)
router.put('/:id', updateOneMenu)
router.delete('/:id', deleteOneMenu)

export default router