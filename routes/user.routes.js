import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";
const router = Router()

router.post('/',  userControllers.addUser)

export default router