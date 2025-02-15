import express from 'express';
import AiCodeReview from '../controllers/ai.controller.js';
const router = express.Router();

router.post("/get-review",AiCodeReview)


export default router;