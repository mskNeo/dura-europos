import express from 'express';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello!");
});

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));