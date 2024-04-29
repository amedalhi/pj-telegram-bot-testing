//imports
import express from "express";
import { handler } from "./controller/index.js";

//app
const PORT = process.env.PORT || 4040;
const app = express();
app.use(express.json());

//routes
app.post("*", async (req, res) => {
  console.log(req.body);
  res.send(await handler(req, "POST"));
});

app.get("*", async (req, res) => {
  res.send(await handler(req, "GET"));
});

//listening
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${PORT}`);
});
