import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  dbURL: process.env.DB_URL,
  port: process.env.PORT || 5000,
  bcrypt_salt: process.env.BCRYPT_SALT,
  jwt_secret: process.env.JWT_SECRET_KEY,
  jwt_expires: process.env.JWT_EXPIRES_IN,
  NODE_DEV: "development",
};
