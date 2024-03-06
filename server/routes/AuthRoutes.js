import { RegisterUser, checkUser } from "../controllers/AuthController.js";
import { Router } from "express"

const router = Router();

router.post("/check-user", checkUser);
router.post("/register-user" , RegisterUser);

export default router;