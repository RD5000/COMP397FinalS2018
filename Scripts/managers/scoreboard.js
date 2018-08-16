var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            // public properties
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "EnemyKills", {
            get: function () {
                return this._enemyKills;
            },
            set: function (enemyKills) {
                this._enemyKills = enemyKills;
                this.EnemyKillLabel.text = "Super Kills: " + this._enemyKills;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new objects.Label("Health: 0", "20px", "Dock51", "#8B0000", 10, 10, false);
            this.EnemyKillLabel = new objects.Label("Super Kills: 0", "20px", "Dock51", "#8B0000", 75, 40, true);
            this.ScoreLabel = new objects.Label("Score: 99999", "20px", "Dock51", "#8B0000", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: 99999", "40px", "Dock51", "#8B0000", 320, 240, true);
            this.Lives = 100;
            this.Score = 0;
            this.HighScore = 0;
            this.EnemyKills = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map