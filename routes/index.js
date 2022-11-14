import { Router } from "express";

import commentRoutes from "./comment.routes.js"
import userRoutes from "./user.routes.js"
import twittRoutes from "./twitt.routes.js"

const router = Router()

router.use('/comment', commentRoutes)
router.use('/user', userRoutes)
router.use('/twitt', twittRoutes)


export default router