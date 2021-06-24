import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
    resetToken: String,
    expireToken: Date,
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("users", userSchema);
