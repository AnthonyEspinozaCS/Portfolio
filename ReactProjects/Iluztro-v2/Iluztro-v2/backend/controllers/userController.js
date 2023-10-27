import { login, signup } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);

    // create jwt token
    const token = createToken(user.user_id);
    console.log(user);

    res.status(200).json({ ...user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// sign up user
export async function signupUser(req, res) {
  const { firstName, lastName, company, email, password } = req.body;

  try {
    const user = await signup(firstName, lastName, company, email, password);

    // create jwt token
    const token = createToken(user.user_id);
    console.log(user);

    res.status(200).json({ ...user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
