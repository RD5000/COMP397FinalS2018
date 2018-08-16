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
    var Enemy2 = /** @class */ (function (_super) {
        __extends(Enemy2, _super);
        // Constructor
        function Enemy2() {
            var _this = _super.call(this, "enemy2") || this;
            // private instance variables
            // public properties
            _this.health = 5;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy2.prototype.checkHealth = function () {
            if (this.health == 0) {
                this.Reset();
                this.health = 3;
                managers.Game.scoreBoard.EnemyKills += 1;
                managers.Game.scoreBoard.Score += 200;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Enemy2.prototype.Start = function () {
            this._dy = 6;
            this.Reset();
        };
        // updates the game object every frame
        Enemy2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            this.checkHealth();
        };
        // reset the objects location to some value
        Enemy2.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -480;
            this.alpha = 0;
        };
        // move the object to some new location
        Enemy2.prototype.Move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Enemy2.prototype.CheckBounds = function () {
            // turn enemy back on when it appears on the screen
            if ((this.y >= 0) && (this.alpha == 0)) {
                this.alpha = 0.20;
            }
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Enemy2.prototype.Collision = function () {
            this.health--;
            this.alpha += 0.40;
        };
        return Enemy2;
    }(objects.GameObject));
    objects.Enemy2 = Enemy2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy2.js.map