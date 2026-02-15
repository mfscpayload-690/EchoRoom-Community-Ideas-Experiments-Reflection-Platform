import { Router, Request, Response } from "express";
import { outcomes } from "./outcomes.routes";

import {
  createReflection,
  getAllReflections,
  getReflectionsByOutcomeId
} from "../services/reflections.service";

const router = Router();


// POST /reflections
router.post("/", (req: Request, res: Response) => {

  try {

    const { outcomeId, content } = req.body;

    // 1. Validate required fields
    if (!outcomeId || !content) {
      return res.status(400).json({
        success: false,
        message: "outcomeId and content are required",
      });
    }

    const reflection = createReflection(
      outcomeId,
      content
    );

    return res.status(201).json({
      success: true,
      reflection,
    });

  } catch {

    res.status(500).json({
      success: false,
      message: "Failed to create reflection",
    });

  }

});


// GET /reflections
router.get("/", (_req: Request, res: Response) => {
  return res.json({
    success: true,
    count: reflections.length,
    data: reflections,
  });
});


// GET /reflections/:outcomeId
router.get("/:outcomeId", (req: Request, res: Response) => {

  try {

    const outcomeId = Number(req.params.outcomeId);

    const reflections = getReflectionsByOutcomeId(outcomeId);

    return res.json({
      success: true,
      reflections,
    });

  } catch {

    res.status(500).json({
      success: false,
      message: "Failed to fetch reflections",
    });

  }

});


export default router;
