import express from "express";
import users from "./routes/users.js";
import jobs from "./routes/jobs.js";
import calendly from "./routes/calendly.js";
import cors from "cors";

//create app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());

//routes
app.use("/users", users);
app.use("/jobs", jobs);
app.use("/calendly", calendly);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(3000);
