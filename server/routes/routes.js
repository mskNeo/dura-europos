import express from 'express';
import { helloWorld, getMap, getAllCoins } from '../controllers/routes.js';

const router = express.Router();

router.get('/', helloWorld);
router.get('/map', getMap);
router.get('/coins', getAllCoins);

export default router;