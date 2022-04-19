import express from 'express';
import { helloWorld, getMap } from '../controllers/routes.js';

const router = express.Router();

router.get('/', helloWorld);
router.get('/map', getMap);

export default router;