import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  dbURL: process.env.DB_URL,
  port: process.env.PORT || 5000,
};
