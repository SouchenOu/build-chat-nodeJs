import { RegisterUser, checkUser, getAllUsers } from "../controllers/AuthController.js";
import { Router } from "express"

const router = Router();

router.post("/check-user", checkUser);
router.post("/register-user" , RegisterUser);
router.post("/contacts", getAllUsers);

export default router;