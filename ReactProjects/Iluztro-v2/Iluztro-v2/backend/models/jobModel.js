import { queryAllJobs, queryUserJobs, queryUpdateJob, createJobDB } from "../utils/database.js";

export async function getUserJobs(userId) {
  const jobs = await queryUserJobs(userId);

  return jobs;
}

export async function getAllUsersJobs() {
  const jobs = await queryAllJobs();

  return jobs;
}

export async function updateOneJob(job_Id, update_status, update_URL) {
  const job = await queryUpdateJob(job_Id, update_status, update_URL);

  return job;
}

export async function createAJob(user_id, job_status, job_type, payment_url) {
  const job = await createJobDB(user_id, job_status, job_type, payment_url);

  return job;
}
