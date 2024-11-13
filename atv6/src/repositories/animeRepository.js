// src/repositories/animeRepository.js
let animeList = [];

const getAll = () => animeList;

const getById = (id) => {
    return animeList.find(anime => anime.id == id);
};

const create = (animeData) => {
    const newAnime = {
        id: Math.random(),  // Isso pode ser melhorado usando algo mais robusto para ID
        name: animeData.name,
        genre: animeData.genre,
        studio: animeData.studio,
    };
    animeList.push(newAnime);
    return newAnime;
};

const update = (id, animeData) => {
    const index = animeList.findIndex(anime => anime.id == id);
    if (index !== -1) {
        animeList[index] = { ...animeList[index], ...animeData };
        return animeList[index];
    } else {
        throw new Error('Anime não encontrado');
    }
};

const deleteAnime = (id) => {
    const index = animeList.findIndex(anime => anime.id == id);
    if (index !== -1) {
        animeList.splice(index, 1);
    } else {
        throw new Error('Anime não encontrado');
    }
};

module.exports = { getAll, getById, create, update, delete: deleteAnime };
