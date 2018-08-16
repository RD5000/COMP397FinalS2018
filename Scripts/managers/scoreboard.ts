module managers {
  export class ScoreBoard {
    // private instance variables
    private _lives:number;
    private _score:number;
    private _enemyKills:number;
    private _highScore:number;


    // public Instance variables
    public LivesLabel: objects.Label;
    public ScoreLabel: objects.Label;
    public EnemyKillLabel: objects.Label;
    public HighScoreLabel: objects.Label;


    // public properties
    get Lives():number {
      return this._lives;
    }
    set Lives(newLives:number) {
      this._lives = newLives;
      this.LivesLabel.text = "Lives: " + this._lives;
    }
    get Score():number {
      return this._score;
    }
    set Score(newScore:number) {
      this._score = newScore;
      this.ScoreLabel.text = "Score: " + this._score;
    }
    get EnemyKills():number {
      return this._enemyKills;
    }
    set EnemyKills(enemyKills:number) {
      this._enemyKills = enemyKills;
      this.EnemyKillLabel.text = "Super Kills: " + this._enemyKills;
    }
    
    get HighScore():number {
      return this._highScore;
    }
    set HighScore(newHighScore:number) {
      this._highScore = newHighScore;
      this.HighScoreLabel.text = "High Score: " + this._highScore;
    }
   

    // constructors
    constructor() {
      this._initialize();
    }

    // private methods
    private _initialize():void {
      this.LivesLabel = new objects.Label("Health: 0", "20px", "28DaysLater", "#8B0000", 10, 10, false);
      this.EnemyKillLabel = new objects.Label("Super Kills: 0", "20px", "28DaysLater", "#8B0000", 75, 40, true);
      this.ScoreLabel = new objects.Label("Score: 99999", "20px", "28DaysLater", "#8B0000", 500, 10, false);
      this.HighScoreLabel = new objects.Label("High Score: 99999", "40px", "28DaysLater", "#8B0000", 320, 240, true);

      this.Lives = 100;
      this.Score = 0;
      this.HighScore = 0;
      this.EnemyKills = 0;
    }

    // public methods
  }
}
