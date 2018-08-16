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
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy() {
            var _this = _super.call(this, "enemy") || this;
            // private instance variables
            // public properties
            _this.health = 10;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy.prototype.checkHealth = function () {
            if (this.health == 0) {
                this.Reset();
                this.health = 10;
                managers.Game.scoreBoard.EnemyKills += 1;
                managers.Game.scoreBoard.Score += 200;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Enemy.prototype.Start = function () {
            this._dy = 1.15;
            this.Reset();
        };
        // updates the game object every frame
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            this.checkHealth();
        };
        // reset the objects location to some value
        Enemy.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -480;
            this.alpha = 1;
        };
        // move the object to some new location
        Enemy.prototype.Move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Enemy.prototype.CheckBounds = function () {
            // turn enemy back on when it appears on the screen
            if ((this.y >= 0) && (this.alpha == 0)) {
                this.alpha = 1;
            }
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Enemy.prototype.Collision = function () {
            this.health--;
            this.alpha -= 0.05;
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map