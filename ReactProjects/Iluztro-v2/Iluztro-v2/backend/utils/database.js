import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

//connect to db
const db = mysql.createConnection(process.env.DATABASE_URL).promise();

export async function queryAllUsers() {
  const [rows] = await db.query("SELECT * FROM users");
  console.log(rows);
  return rows;
}

export async function getUser(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);

  return rows[0];
}

export async function queryUserById(userId) {
  const [rows] = await db.query("SELECT * FROM users WHERE user_id = ? LIMIT 1", [userId]);

  return rows[0];
}

export async function createUser(firstName, lastName, company, email, password) {
  const result = await db.query("INSERT INTO users VALUES (DEFAULT, ?, ?, ?, ?, ?, DEFAULT)", [firstName, lastName, company, email, password]);
  const user = await getUser(email);

  return user;
}

export async function queryUserJobs(userId) {
  const [rows] = await db.query("SELECT * FROM jobs WHERE user_id = ?", [userId]);

  return rows;
}

export async function queryAllJobs() {
  const [rows] = await db.query("SELECT users.user_id, users.first_name, users.last_name, users.company, users.email, jobs.job_id, jobs.status, jobs.created_at, jobs.type_job FROM users INNER JOIN jobs ON users.user_id = jobs.user_id");

  return rows;
}

export async function queryUpdateJob(jobId, updateValue) {
  const [rows] = await db.query("UPDATE jobs SET status = ? where job_id = ?", [updateValue, jobId]);

  return rows.affectedRows;
}
