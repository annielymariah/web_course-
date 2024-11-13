// src/services/animeService.js
const animeRepository = require('../repositories/animeRepository');

const validateAnime = (anime) => {
    return anime.name && anime.genre && anime.studio;
};

const getAllAnimes = () => {
    return animeRepository.getAll();  // Retorna todos os animes
};

const getAnimeById = (id) => {
    return animeRepository.getById(id);  // Retorna um anime por ID
};

const createAnime = (animeData) => {
    if (!validateAnime(animeData)) {
        throw new Error('Todos os campos devem ser preenchidos');
    }
    return animeRepository.create(animeData);  // Cria um novo anime
};

const updateAnime = (id, animeData) => {
    if (!validateAnime(animeData)) {
        throw new Error('Todos os campos devem ser preenchidos');
    }
    return animeRepository.update(id, animeData);  // Atualiza um anime
};

const deleteAnime = (id) => {
    return animeRepository.delete(id);  // Deleta um anime
};

module.exports = { getAllAnimes, getAnimeById, createAnime, updateAnime, deleteAnime };
