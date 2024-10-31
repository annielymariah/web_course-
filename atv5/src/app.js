const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const animeList = [];

app.get('/animes', (request, response) => {
    return response.status(200).json(animeList);
});

app.get('/animes/:id', (request, response) => {
    const id = request.params.id; 
    const anime = animeList.find(a => a.id == id);
    if (anime) {
        return response.json(anime);
    } else {
        return response.status(404).json({ message: 'Anime não encontrado' });
    }
});

const validateAnime = (anime) => {
    return anime.name && anime.genre && anime.studio; 
};

app.post('/animes', (request, response) => {
    const body = request.body;

    if (!validateAnime(body)) {
        return response.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
    }

    const newAnime = {
        id: Math.random(),
        name: body.name,
        genre: body.genre,
        studio: body.studio,
    };
    animeList.push(newAnime);
    return response.status(201).json(newAnime); 
});

app.put('/animes/:id', (request, response) => {
    const id = request.params.id;
    const index = animeList.findIndex(a => a.id == id);
    if (index !== -1) {
        const updatedAnime = { ...animeList[index], ...request.body };

        if (!validateAnime(updatedAnime)) {
            return response.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
        }

        animeList[index] = updatedAnime;
        return response.json(updatedAnime);
    } else {
        return response.status(404).json({ message: 'Anime não encontrado' });
    }
});

app.delete('/animes/:id', (request, response) => {
    const id = request.params.id;
    const index = animeList.findIndex(a => a.id == id); 
    if (index !== -1) {
        animeList.splice(index, 1); 
        return response.status(204).send();
    } else {
        return response.status(404).json({ message: 'Anime não encontrado' });
    }
});
