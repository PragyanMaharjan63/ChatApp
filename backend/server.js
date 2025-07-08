import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formVal");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const user = mongoose.model("User", UserSchema);

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  const userCheck = await user.findOne({ username });
  if (userCheck) {
    res.status(409).json({ message: "User already exists" });
  } else {
    try {
      const newUser = new user({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User Registered" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
