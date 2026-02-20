class Game {
    constructor(id, title, genre, releaseYear, developer, score) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.developer = developer;
        this.score = score;
    }
}

module.exports = Game;