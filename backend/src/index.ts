import express, { Request, Response } from "express";
import cors from "cors";

import ideasRoutes from "./routes/ideas.routes";
import experimentsRoutes from "./routes/experiments.routes";
import outcomesRoutes from "./routes/outcomes.routes";
import reflectionsRoutes from "./routes/reflections.routes";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
}));

app.use(express.json());


// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});


// Register routes
app.use("/ideas", ideasRoutes);
app.use("/experiments", experimentsRoutes);
app.use("/outcomes", outcomesRoutes);
app.use("/reflections", reflectionsRoutes);


// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
