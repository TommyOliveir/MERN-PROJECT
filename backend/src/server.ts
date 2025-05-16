import app from "./app";
import mongoose from "mongoose";
import { env } from "./util/validateEnv";

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
