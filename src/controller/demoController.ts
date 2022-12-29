import { Request, Response } from "express";
import prisma from "../utils/db.js";

const demoPlayer = async (req: Request, res: Response) => {
  const player = await prisma.player.findFirst({
    where: {
      name: "Tom Brady",
    },
    include: {
      stats: {
        include: {
          performance: true,
        },
      },
    },
  });
  res.json({ player });
};

const demoTeam = async (req: Request, res: Response) => {
  const team = await prisma.team.findFirst({
    where: {
      name: "Eagles",
    },
    select: {
      id: true,
      name: true,
      icon: true,
      city: true,
      conference: true,
      division: true,
      urlSlug: true,
      details: true,
      stats: {
        include: {
          first_downs: true,
          down_conversions: true,
          offense: true,
          field_goals: true,
          touch_downs: true,
        },
      },
      roster: {
        where: {
          position: "QB",
        },
      },
    },
  });
  res.json({ team });
};

export { demoPlayer, demoTeam };
