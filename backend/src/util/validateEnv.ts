import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

//check env variable types
export default cleanEnv(process.env, {
  MONGO_URI: str(),
  PORT: port(),
});
