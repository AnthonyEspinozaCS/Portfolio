import express from "express";
import { getUsersJobs, getAllJobs, updateJob } from "../controllers/jobController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

//require auth for all job routes
router.use(requireAuth);

//GET all workouts
router.get("/", getUsersJobs);

router.get("/admin", getAllJobs);

router.patch("/:id", updateJob);

export default router;
