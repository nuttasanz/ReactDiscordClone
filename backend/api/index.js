import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.route.js";
import authRoutes from "../api/routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3009;

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
