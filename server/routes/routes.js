import express from 'express';
import { helloWorld, getMap, getCoins } from '../controllers/routes.js';

const router = express.Router();

router.get('/', helloWorld);
router.get('/map', getMap);
router.get('/coins', getCoins);

export default router;