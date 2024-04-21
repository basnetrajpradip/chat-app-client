import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatarId: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    messages: [
      {
        message: String,
        sender: String,
        receiver: String,
        time: Date,
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
