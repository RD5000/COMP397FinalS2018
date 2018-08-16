var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var EndlessScene = /** @class */ (function (_super) {
        __extends(EndlessScene, _super);
        // Public Properties
        // Constructor
        function EndlessScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialize Game Variables and objects
        EndlessScene.prototype.Start = function () {
            this._backdrop = new objects.Ocean();
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
            this._clouds = new Array();
            this._cloudNum = 5;
            // loop and add each cloud to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            // create the scoreboard UI for the Scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        // triggered every frame
        EndlessScene.prototype.Update = function () {
            //console.log("Num Objects: " + this.numChildren);
            var _this = this;
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
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                // check collision between plane and current cloud
                managers.Collision.Check(_this._plane, cloud);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._enemy);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._enemy2);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._clouds[0]);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._clouds[1]);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._clouds[2]);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._clouds[3]);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._clouds[4]);
            });
            // if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.enemyKills = 0;
                managers.Game.currentScene = config.Scene.OVER;
            }
        };
        // This is where the fun happens
        EndlessScene.prototype.Main = function () {
            var _this = this;
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
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // add clouds to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add scoreboard labels to the scene
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._scoreBoard.EnemyKillLabel);
        };
        return EndlessScene;
    }(objects.Scene));
    scenes.EndlessScene = EndlessScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=endless.js.map