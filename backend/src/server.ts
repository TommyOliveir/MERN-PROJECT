import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import env from "./util/validateEnv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

console.log(env.MONGO_URI);

const port = env.PORT;

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB Connected`);
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch(console.error);
