import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { email, userName, displayName, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    email,
    userName,
    displayName,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(errorHandler(409, "มีผู้ใช้อีเมลนี้แล้ว"));
  }
};
