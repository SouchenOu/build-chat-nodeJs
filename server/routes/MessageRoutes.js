import { Router } from "express";
import { createMessage, getMessage } from "../controllers/MessageController.js";


const router = Router();

router.post("/Create-message", createMessage);
router.get("/get-messages/:fromId/:toId", getMessage);
// router.get("/")

export default router;