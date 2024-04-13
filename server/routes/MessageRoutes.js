import { Router } from "express";
import { addAudio, addImage, createMessage, getMessage, getUsersThatHaveContactsWith, searchContacts, searchMessage } from "../controllers/MessageController.js";
import multer from "multer";


const router = Router();

const uploadAudio = multer({dest : "uploads/recordings"});
const uploadImage = multer({dest : "uploads/images"});

router.post("/Create-message", createMessage);
router.get("/get-messages/:fromId/:toId", getMessage);
router.post("/add-image-message",uploadImage.single("image"), addImage);
router.post("/add-audio-message", uploadAudio.single("audio"), addAudio);
router.post("/search-messages", searchMessage);
router.get("/get-contacts/:fromId", getUsersThatHaveContactsWith);
router.post("/filter-contacts",searchContacts);

export default router;