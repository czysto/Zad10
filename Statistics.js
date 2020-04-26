class Statistics {
    constructor() {
        this.gameResults = [];

    }
    addGameToStatistics(win, bid) {
        let gameResults = {
            win,
            bid
        }
        console.log(gameResults);
        this.gameResults.push(gameResults)
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let loses = this.gameResults.filter(result => !result.win).length;
        console.log(wins);
        return [games, wins, loses]
    }
}

const stats = new Statistics()