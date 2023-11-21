import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/:uuid", async (req, res) => {
  console.log(req.params);
  const { uuid } = req.params;
  let url = `https://api.calendly.com/scheduled_events/${uuid}`;

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VITE_CALENDLY}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.status(200).json({ result: json.resource }))
    .catch((err) => res.status(400).json({ error: err }));
});

export default router;
