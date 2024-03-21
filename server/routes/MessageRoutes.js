import { Router } from "express";
import { addImage, createMessage, getMessage } from "../controllers/MessageController.js";
import multer from "multer";


const router = Router();

const uploadImage = multer({dest : "uploads/images"});

router.post("/Create-message", createMessage);
router.get("/get-messages/:fromId/:toId", getMessage);
router.post("/add-image-message",uploadImage.single("image"), addImage);

export default router;