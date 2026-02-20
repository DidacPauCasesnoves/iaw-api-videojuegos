const express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

router.get('/games', gameController.getAllGames);
router.get('/games/:id', gameController.getGameById);
router.post('/calculate', gameController.calculateGrades);

module.exports = router;