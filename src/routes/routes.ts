import { Router } from "express";
import authRoute from "./authRoute";
import profileRoute from "./profileRoute";
import likeRoute from "./likeRoute";
import matchRoute from "./matchRoute";
import photoRouter from "./photoRoute";

const router = Router();
router.use(authRoute);
router.use(profileRoute);
router.use(likeRoute);
router.use(matchRoute);
router.use(photoRouter);

export default router;

