import bcrypt from "bcryptjs";
import User from "../models/users.js";

export const signup = async (req, res) => {
  const { email, password, passwordveri } = req.body;
  try {
    if (!email || !password || !passwordveri) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must me greater than 8 characters" });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User of this email already exists" });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    // generate token here
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
