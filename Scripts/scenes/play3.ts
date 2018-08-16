module scenes {
    export class PlayScene3 extends objects.Scene {
      // Private Instance Variables
      private _backdrop: objects.Backdrop3;
      private _plane: objects.Plane;
      private _island: objects.Island;
      private _clouds: objects.Cloud[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
      private _bulletManager: managers.Bullet;
  
     
      private _coin: objects.Coin;
      private _enemy: objects.Enemy;
      private _enemy2: objects.Enemy2;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Methods
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._backdrop = new objects.Backdrop3();
        this._plane = new objects.Plane();
        managers.Game.plane = this._plane;
  
        // make a reference to the bullet manager in the game manager
        this._bulletManager = new managers.Bullet();
        managers.Game.bulletManger = this._bulletManager;
  
        // create an enemy object
        this._enemy = new objects.Enemy();
        this._enemy2 = new objects.Enemy2();
        this._coin = new objects.Coin();
        this._island = new objects.Island();
  
        // instantiate the cloud array
        this._clouds = new Array<objects.Cloud>();
        this._cloudNum = 5;
        // loop and add each cloud to the array
        for (let count = 0; count < this._cloudNum; count++) {
          this._clouds[count] = new objects.Cloud();
        }
  
        
  
        // create the scoreboard UI for the Scene
        this._scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = this._scoreBoard;
  
        this.Main();
      }
  
      // triggered every frame
      public Update(): void {
        //console.log("Num Objects: " + this.numChildren);
  
        this._backdrop.Update();
        this._plane.Update();
  
        this._enemy.Update();
        this._enemy2.Update();
        this._bulletManager.Update();
  
        this._coin.x = this._island.x;
        this._coin.y = this._island.y;
        this._coin.Update();
  
        this._island.Update();
  
        // check collision between plane and coin
        managers.Collision.Check(this._plane, this._coin);
        //check collision between plane and super enemy
        managers.Collision.Check(this._plane, this._enemy);

        managers.Collision.Check(this._plane, this._enemy2);
  
        this._clouds.forEach(cloud => {
          cloud.Update();
          // check collision between plane and current cloud
          managers.Collision.Check(this._plane, cloud);
        });
  
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._enemy);
        });
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._enemy2);
        });
  
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._clouds[0]);
        });
  
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._clouds[1]);
        });
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._clouds[2]);
        });
  
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._clouds[3]);
        });
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._clouds[4]);
        });
      
  
       
        if (this._scoreBoard.EnemyKills >= 11) {
          console.log("NEXT LEVEL");
          this._scoreBoard.EnemyKills = 0;
          managers.Game.currentScene = config.Scene.WIN;
  
        }
  
        // if lives fall below zero switch scenes to the game over scene
        if(this._scoreBoard.Lives <= 0) {
          managers.Game.enemyKills = 0;
          managers.Game.currentScene = config.Scene.OVER;
        }
        
      }
      
  
      
  
      // This is where the fun happens
      public Main(): void {
        // add the backdrop to the scene
        this.addChild(this._backdrop);
  
        // add the island to the scene
        this.addChild(this._island);
  
        // add the coin to the scene
        this.addChild(this._coin);
  
        // add the plane to the scene
        this.addChild(this._plane);
  
  
        // add the enemy plane to the scene
        this.addChild(this._enemy);
        this.addChild(this._enemy2);
        // add the bullets to the scene
        this._bulletManager.Bullets.forEach(bullet => {
          this.addChild(bullet);
        });
  
        // add clouds to the scene
  
        this._clouds.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add scoreboard labels to the scene
        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
        this.addChild(this._scoreBoard.EnemyKillLabel);
      }
    }
  }
  