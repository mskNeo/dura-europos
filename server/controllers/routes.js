import CoinEntry from '../models/coinSchema.js';

export const helloWorld = (req, res) => {
    res.send({"name": "Neo"});
}

export const getMap = (req, res) => {
    res.send({"page": "Map"});
}

export const getCoins = (req, res) => {
    // try {
    // const coinEntries = await CoinEntry.find()
    CoinEntry.find({}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    })
    // console.log(coinEntries);
    // res.sendStatus(200).json(coinEntries);
    
    // } catch (err) {
    //     res.sendStatus(404).json({ message: err.message });
    // }
}