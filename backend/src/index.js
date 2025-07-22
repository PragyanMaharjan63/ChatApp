import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.use(express.json());
config();

const port = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("listening on ", port, "port");
  connectDB();
});
