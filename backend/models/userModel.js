import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],

      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
    cartData: {
      type: Object,
      default: {},
    },
    address: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "user",
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    // to allow empty object to be saved
    minimize: false,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
