import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/Routes.js"
import ErrorHandler from "./middlewares/ErrorHandler.js"

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", Routes);

// Error Handler (must be last)
app.use(ErrorHandler);

export default app;
