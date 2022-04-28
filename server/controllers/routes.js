import CoinEntry from '../models/coinSchema.js';

export const helloWorld = (req, res) => {
    res.send({"name": "Neo"});
}

export const getMap = (req, res) => {
    res.send({"page": "Map"});
}

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