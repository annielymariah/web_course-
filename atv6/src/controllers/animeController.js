const express = require('express');
const router = express.Router();
const animeService = require('../services/animeService');

router.get('/', (req, res) => {
    try {
        const animes = animeService.getAllAnimes();
        res.status(200).json(animes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar animes', error: error.message });
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    try {
        const anime = animeService.getAnimeById(id);
        if (anime) {
            res.json(anime);
        } else {
            res.status(404).json({ message: 'Anime não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar anime', error: error.message });
    }
});

router.post('/', (req, res) => {
    const animeData = req.body;
    try {
        const newAnime = animeService.createAnime(animeData);
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const animeData = req.body;
    try {
        const updatedAnime = animeService.updateAnime(id, animeData);
        res.json(updatedAnime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    try {
        animeService.deleteAnime(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
