import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import homeRoutes from "./routes/home.js"
import cookieParser from "cookie-parser";

import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/home", homeRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});