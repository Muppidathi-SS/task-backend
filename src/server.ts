import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Tracker API is running",
  });
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
);

app.use("/api", Routes);

app.use((req, res) => {
  console.log(`404: Route not found - ${req.method} ${req.originalUrl}`);

  res.status(404).json({
    success: false,
    message: "API route not found",
    method: req.method,
    path: req.originalUrl,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
