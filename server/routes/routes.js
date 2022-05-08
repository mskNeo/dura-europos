import express from 'express';
import * as controller from '../controllers/dbController.js';

const router = express.Router();

router.get('/coins', controller.getAllCoins);
router.get('/coins/:coinNum', controller.getCoinByNumber);
router.get('/coins/hoards/:hoardNum', controller.getCoinByHoard);
router.get('/coins/emperors/:emperorName', controller.getCoinByEmperor);
router.get('/coins/denomination/:denom', controller.getCoinByDenomination);
router.get('/coins/mint/:mint', controller.getCoinByMint);

export default router;