import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";
const router = Router()

router.post('/',  userControllers.addUser)
router.delete('/:userId', userControllers.delUser)
router.patch('/:userId', userControllers.updateUser)
router.get('/', userControllers.getUsers)
router.get('/userId/:userId', userControllers.getUserById)


export default router