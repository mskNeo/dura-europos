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