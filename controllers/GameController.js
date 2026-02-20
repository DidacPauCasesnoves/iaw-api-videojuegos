const Game = require('../models/Game');
const gamesData = require('../data/games.json');

exports.getAllGames = (req, res) => {
    const genreFilter = req.query.genre;
    let results = gamesData.map(g => new Game(g.id, g.title, g.genre, g.releaseYear, g.developer, g.score));

    if (genreFilter) {
        results = results.filter(g => g.genre.toLowerCase() === genreFilter.toLowerCase());
    }
    res.json(results);
};

exports.getGameById = (req, res) => {
    const gameRaw = gamesData.find(g => g.id === parseInt(req.params.id));
    if (gameRaw) {
        const game = new Game(gameRaw.id, gameRaw.title, gameRaw.genre, gameRaw.releaseYear, gameRaw.developer, gameRaw.score);
        res.json(game);
    } else {
        res.status(404).json({ error: "Juego no encontrado" });
    }
};

exports.calculateGrades = (req, res) => {
    const students = req.body;
    const results = students.map(s => {
        const avg = s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
        return {
            student: `${s.surname}, ${s.name}`,
            finalMark: Math.round(avg)
        };
    }).sort((a, b) => a.student.localeCompare(b.student));

    res.json(results);
};