import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./db/db.js";
import router from "./routes/transactions.js";

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/v1", router);

const server = () => {
  db();
  app.listen(PORT, function () {
    console.log("Server is running and listening to port", PORT);
  });
};

server();
