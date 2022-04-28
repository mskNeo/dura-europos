import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_COLLECTION = process.env.DB_COLLECTION;
const DB_CONNECTION = `mongodb+srv://durageomap:${DB_PASSWORD}@dura-coins.pdbgd.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`App listening on port ${PORT}`)))
    .catch((err) => console.error(err.message));
