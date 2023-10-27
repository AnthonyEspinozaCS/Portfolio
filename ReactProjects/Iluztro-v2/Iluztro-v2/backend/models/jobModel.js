import { queryAllJobs, queryUserJobs } from "../utils/database.js";

export async function getUserJobs(userId) {
  const jobs = await queryUserJobs(userId);

  return jobs;
}

export async function getAllUsersJobs() {
  const jobs = await queryAllJobs();

  return jobs;
}
