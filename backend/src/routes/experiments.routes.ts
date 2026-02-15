import { Router, Request, Response } from "express";

import {
  getAllExperiments,
  getExperimentById,
  createExperiment,
  updateExperiment,
  deleteExperiment,
  ExperimentStatus
} from "../services/experiments.service";

const router = Router();


// GET all experiments
router.get("/", (req: Request, res: Response) => {

  try {

    const experiments = getAllExperiments();

    res.json({
      success: true,
      data: experiments,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }

});


// GET experiment by ID
router.get("/:id", (req: Request, res: Response) => {

  try {

    const id = Number(req.params.id);

    const experiment = getExperimentById(id);

    if (!experiment) {

      return res.status(404).json({
        success: false,
        message: "Experiment not found",
      });

    }

    res.json({
      success: true,
      data: experiment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }

});


// CREATE experiment
router.post("/", (req: Request, res: Response) => {

  try {

    const { title, description, ideaId, status } = req.body;

    if (!title || !description || !ideaId || !status) {

      return res.status(400).json({
        success: false,
        message: "title, description, ideaId, and status are required",
      });

    }

    const newExperiment = createExperiment(
      title,
      ideaId,
      description,
      status as ExperimentStatus
    );

    res.status(201).json({
      success: true,
      data: newExperiment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }

});



// UPDATE experiment
router.put("/:id", (req: Request, res: Response) => {

  try {

    const id = Number(req.params.id);

    const updatedExperiment = updateExperiment(id, req.body);

    if (!updatedExperiment) {

      return res.status(404).json({
        success: false,
        message: "Experiment not found",
      });

    }

    res.json({
      success: true,
      data: updatedExperiment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }

});


// DELETE experiment
router.delete("/:id", (req: Request, res: Response) => {

  try {

    const id = Number(req.params.id);

    const deleted = deleteExperiment(id);

    if (!deleted) {

      return res.status(404).json({
        success: false,
        message: "Experiment not found",
      });

    }

    res.json({
      success: true,
      message: "Experiment deleted",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }

});

export default router;
