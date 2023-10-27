import { getUserJobs, getAllUsersJobs } from "../models/jobModel.js";

export async function getUsersJobs(req, res) {
  const user_id = req.user.user_id;

  const jobs = await getUserJobs(user_id);

  if (!jobs) return res.status(404).json({ error: "User has no jobs" });

  res.status(200).json(jobs);
}

export async function getAllJobs(req, res) {
  const is_admin = req.user.is_admin;

  if (!is_admin) return res.status(401).json({ error: "You are not authorized to access this URL" });

  const jobs = await getAllUsersJobs();

  res.status(200).json(jobs);
}
