import express from "express";

// controller functions
import { loginUser, signupUser, allUsers } from "../controllers/userController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

// login route
router.post("/login", loginUser);

// sign up route
router.post("/signup", signupUser);

//require auth for all routes below
router.use(requireAuth);

router.get("/all", allUsers);

export default router;
