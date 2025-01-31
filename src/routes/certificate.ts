import { Router } from "express";
import protectRoute from "../middleware/auth";
import { createCertifi } from "../controllers/createcertificate.controller";

const router = Router();

router.post("/create", protectRoute(), createCertifi);

export default router;