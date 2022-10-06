import { Router } from "express";
import authRoute from "./authRoute";
import profileRoute from "./profileRoute";
import likeRoute from "./likeRoute";
import matchRoute from "./matchRoute";

const router = Router();
router.use(authRoute);
router.use(profileRoute);
router.use(likeRoute);
router.use(matchRoute);

export default router;

