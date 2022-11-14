import { Router } from "express";
import commentControllers from "../controllers/comment.controllers.js";

const router = Router()

router.get('/', commentControllers.getComment)
router.post('/', commentControllers.addComment)

export default router