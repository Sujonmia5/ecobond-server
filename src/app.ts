import express from "express";
import cors from "cors";
import routes from "./app/routes/route";

const app = express();

// middleware parsers
app.use(express.json());
app.use(cors({ origin: "https://ecobond-clinet.vercel.app" }));

// define root routes example
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/v1", routes);

export default app;
