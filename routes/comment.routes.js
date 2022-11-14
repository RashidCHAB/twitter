import { Router } from "express";
import commentControllers from "../controllers/comment.controllers.js";

const router = Router()


router.post('/:twittId', commentControllers.addComment)
router.delete('/', commentControllers.delComment)

router.get('/', commentControllers.getComment)
router.get('/commentId/:commentId', commentControllers.getCommentById)
router.get('/userId/:userId', commentControllers.getCommentByUser)
router.get('/twittId/:twittId', commentControllers.getCommentByTwitt)
export default router