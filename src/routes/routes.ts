import { Router } from "express";
import authRoute from "./authRoute";
import profileRoute from "./profileRoute";
import likeRoute from "./likeRoute";

const router = Router();
router.use(authRoute);
router.use(profileRoute);
router.use(likeRoute);

export default router;

