import CoinEntry from '../models/coinSchema.js';

export const getAllCoins = (req, res) => {
    
    // find all coins and return in a json
    CoinEntry
        .find({}, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}

export const getCoinByNumber = (req, res) => {
    const coinNum = req.params.coinNum;

    // find coin by specified number in url path
    CoinEntry
        .find({ "Coin #": coinNum }, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}

export const getCoinByHoard = (req, res) => {
    const hoardNum = req.params.hoardNum;

    // find coins based on hoard number in url path
    CoinEntry
        .find({ "Hoard #": { $regex: new RegExp(hoardNum, "i") } }, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}

export const getCoinByEmperor = (req, res) => {
    const emperorName = req.params.emperorName;

    // find coins based on emperor name in url path
    CoinEntry
        .find({ "Emperor": { $regex: new RegExp(emperorName, "i") } }, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}

export const getCoinByDenomination = (req, res) => {
    const denom = req.params.denom;

    // find coins based on denomination name in url path
    CoinEntry
        .find({ "Denomination": { $regex: new RegExp(denom,"i") } }, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}

export const getCoinByMint = (req, res) => {
    let mint = req.params.mint;

    // find coins based on mint name in url path
    CoinEntry
        .find({ "Mint": { $regex: new RegExp(mint,"i") } }, 
            (err, result) => {
                if (err) console.log(err);
                else {
                    res.json(result);
                }
            });
}