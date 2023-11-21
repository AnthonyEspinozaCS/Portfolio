import { getUserJobs, getAllUsersJobs, updateOneJob, createAJob } from "../models/jobModel.js";

export async function getUsersJobs(req, res) {
  const user_id = req.user.user_id;

  const jobs = await getUserJobs(user_id);

  if (!jobs) return res.status(404).json({ error: "User has no jobs" });

  res.status(200).json(jobs);
}

export async function getAllJobs(req, res) {
  const is_admin = req.user.is_admin;

  if (!is_admin) return res.status(401).json({ error: "You are not authorized to access this URI." });

  const jobs = await getAllUsersJobs();

  res.status(200).json(jobs);
}

export async function updateJob(req, res) {
  const is_admin = req.user.is_admin;
  const { job_Id, update_status, update_URL } = req.body;

  if (!is_admin) return res.status(401).json({ error: "You are not authorized to access this URI." });

  const job = await updateOneJob(job_Id, update_status, update_URL);

  res.status(200).json(job);
}

export async function createJob(req, res) {
  const is_admin = req.user.is_admin;
  const { user_id, job_status, job_type, payment_url } = req.body;

  if (!is_admin) return res.status(401).json({ error: "You are not authorized to access this URI." });

  console.log(req.body);
  const job = await createAJob(user_id, job_status, job_type, payment_url);
  res.status(200).json(job);
}
