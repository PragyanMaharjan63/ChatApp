import express from "express";
import cors from "cors";
import User from "./models/user.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const userCheck = await User.findOne({ username });

  if (userCheck) {
    res.status(409).json({ message: "User already exists" });
  } else {
    try {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User Registered" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});

export default app;
