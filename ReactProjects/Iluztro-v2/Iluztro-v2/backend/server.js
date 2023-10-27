import express from "express";
import user from "./routes/user.js";
import jobs from "./routes/jobs.js";
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
app.use("/user", user);
app.use("/jobs", jobs);

app.listen(3000);
