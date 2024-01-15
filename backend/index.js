//Packages
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";

//utils
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`server running on port: ${port} 🏃‍♂️`));
