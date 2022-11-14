import { Router } from "express";
import twittControllers from "../controllers/twitt.controllers.js";
const router = Router()

router.post('/', twittControllers.addTwitt)
router.delete('/', twittControllers.delTwitt)
router.patch('/:twittId', twittControllers.updateTwitt)
router.get('/', twittControllers.getTwitt)
router.get('/twittId/:twittId', twittControllers.getTwittById)
router.get('/userId/:userId', twittControllers.getTwittByUser)
router.patch('/twittId/:twittId', twittControllers.addLike)

export default router