import { Request, Response } from "express";
import prisma from "../utils/db.js";

const demoPlayer = async (req: Request, res: Response) => {
  const player = await prisma.player.findFirst({
    where: {
      name: "Tom Brady",
    },
    include: {
      stats: true,
    },
  });
  res.json({ player });
};

const demoTeam = async (req: Request, res: Response) => {
  const team = await prisma.team.findFirst({
    where: {
      name: "Eagles",
    },
    include: {
      stats: true,
      roster: true,
      details: true,
    },
  });
  res.json({ team });
};

export { demoPlayer, demoTeam };
