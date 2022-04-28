import mongoose from 'mongoose';

const coinSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    'Hoard #': Number,
    Emperor: String,
    'Emperor Rule - Start Date': Date,
    'Emperor Rule - End Date': Date,
    Denomination: String,
    Mint: String,
    'Coin #': Number,
    'Weight (Grams)': Number,
    'Obverse Inscription': String,
    'Obverse Depiction': String,
    'Reverse Inscription': String,
    'Reverse Description': String,
})

const collection = 'coins';

const CoinEntry = mongoose.model('CoinEntry', coinSchema, collection);

export default CoinEntry;