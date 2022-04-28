import express from 'express';
import { getAllCoins } from '../controllers/dbController.js';

const router = express.Router();

router.get('/coins', getAllCoins);

export default router;