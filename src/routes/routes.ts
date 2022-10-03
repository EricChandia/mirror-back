import { Router } from "express";
import authRoute from "./authRoute";
import profileRoute from "./profileRoute";

const router = Router();
router.use(authRoute);
router.use(profileRoute);

export default router;