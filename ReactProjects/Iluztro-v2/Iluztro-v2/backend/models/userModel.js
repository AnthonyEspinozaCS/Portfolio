import bcrypt from "bcrypt";
import validator from "validator";
import { getUser, createUser } from "../utils/database.js";

// login method
export async function login(email, password) {
  // validation
  if (!email || !password) throw Error("All fields must be filled");

  /* const user = await this.findOne({ email }); */
  const user = await getUser(email);

  if (!user) throw Error("Incorrect email");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Incorrect password");

  return user;
}

// signup method
export async function signup(firstName, lastName, company, email, password) {
  // validation
  if (!firstName || !lastName || !company || !email || !password) throw Error("All fields must be filled");
  if (!validator.isEmail(email)) throw Error("Email is not valid");
  if (!validator.isStrongPassword(password)) throw Error("Password not strong enough");

  const exists = await getUser(email);

  if (exists) {
    throw Error("Email already in use");
  }

  // add salt to password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await createUser(firstName, lastName, company, email, hash);
  console.log(user, "signup");

  return user;
}
