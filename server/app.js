import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/routes.js';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     res.send("hello from the server!");
// });

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));