import { queryAllJobs, queryUserJobs, queryUpdateJob } from "../utils/database.js";

export async function getUserJobs(userId) {
  const jobs = await queryUserJobs(userId);

  return jobs;
}

export async function getAllUsersJobs() {
  const jobs = await queryAllJobs();

  return jobs;
}

export async function updateOneJob(jobId, updateValue) {
  const job = await queryUpdateJob(jobId, updateValue);

  return job;
}
