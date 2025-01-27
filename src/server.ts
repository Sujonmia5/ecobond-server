/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config";

async function main() {
  try {
    mongoose.connect(config.dbURL as string);

    app.listen(config.port, () => {
      console.log(`listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
