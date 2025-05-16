import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

export default app;
