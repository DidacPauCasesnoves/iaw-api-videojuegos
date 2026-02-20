const Game = require('../models/Game');
const gamesData = require('../data/games.json');
const fs = require('fs');

//Función para obtener todos los juegos.
exports.getAllGames = async (req, res) => {
    
    const gamesJson = JSON.parse(fs.readFileSync('./data/games.json', 'utf-8'));
    const games = gamesJson.map(game => 
        new Game(game.id, game.title, game.genre, game.releaseYear, game.developer, game.score)
    );

    let filteredGames = [];
    
    const genreFilter = req.query.genre;

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        if(!genreFilter || game.genre.toLowerCase() === genreFilter.toLowerCase()) {
            filteredGames.push(game);
        }
    }

    return res.json(filteredGames);
}

//Función por ID.
exports.getGameById = async (req, res) => {

    const gamesJson = JSON.parse(fs.readFileSync('./data/games.json', 'utf-8'));
    const games = gamesJson.map(game =>
        new Game(game.id, game.title, game.genre, game.releaseYear, game.developer, game.score)
    );

    let gameFiltrat = null;

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        if(game.id === parseInt(req.params.id)) {
            gameFiltrat = game;
        }
    }

    return res.json(gameFiltrat);
}
//Función por nombre
exports.searchGames = async (req, res) => {

    const gamesJson = JSON.parse(fs.readFileSync('./data/games.json', 'utf-8'));
    const games = gamesJson.map(game =>
        new Game(game.id, game.title, game.genre, game.releaseYear, game.developer, game.score)
    );

    let gamesFiltrats = [];

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        if(game.title.toLowerCase() === req.query.name.toLowerCase()) {
            gamesFiltrats.push(game);
        }
    }

    return res.json(gamesFiltrats);
}