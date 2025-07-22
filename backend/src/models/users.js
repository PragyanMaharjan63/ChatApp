import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlegnth: 8,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("Users", userSchema);
export default user;
