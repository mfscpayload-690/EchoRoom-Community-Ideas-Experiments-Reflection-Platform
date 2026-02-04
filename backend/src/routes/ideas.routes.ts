import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    ideas: [
      {
        id: 1,
        title: "Plant Trees in Campus",
        description: "Organize a student-led tree plantation drive",
        status: "proposed"
      },
      {
        id: 2,
        title: "Peer Learning Circles",
        description: "Weekly peer-to-peer knowledge sharing sessions",
        status: "active"
      }
    ]
  });
});

export default router;
