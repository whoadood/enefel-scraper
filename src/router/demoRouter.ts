import { Router } from "express";
import { demoPlayer, demoTeam } from "../controller/demoController";

const demoRouter = Router();

demoRouter.get("/player", demoPlayer);

demoRouter.get("/team", demoTeam);

export default demoRouter;
