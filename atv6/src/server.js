const express = require('express');
const app = express();
const animeController = require('./controllers/animeController.js');

const PORT = 3000;

app.use(express.json());

app.use('/animes', animeController);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 