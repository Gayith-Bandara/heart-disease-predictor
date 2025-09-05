import express from "express";
import { predict, test} from "../controllers/Controller.js";

const router = express.Router();

router.post("/predict", predict);
router.get("/", test);

export default router;
