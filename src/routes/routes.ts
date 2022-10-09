import { Router } from "express";
import authRoute from "./authRoute";
import profileRoute from "./profileRoute";
import likeRoute from "./likeRoute";
import matchRoute from "./matchRoute";
import photoRouter from "./photoRoute";
import dislikeRoute from "./dislikeRoute";

const router = Router();
router.use(authRoute);
router.use(profileRoute);
router.use(likeRoute);
router.use(matchRoute);
router.use(photoRouter);
router.use(dislikeRoute);

export default router;


