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
    var Backdrop2 = /** @class */ (function (_super) {
        __extends(Backdrop2, _super);
        // public properties
        // Constructor
        function Backdrop2() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("backdrop2")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Backdrop2.prototype._reset = function () {
            this.y = -960;
        };
        // move the object to some new location
        Backdrop2.prototype._move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Backdrop2.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Backdrop2.prototype.Start = function () {
            this._dy = 5;
            this._reset();
        };
        // updates the game object every frame
        Backdrop2.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Backdrop2;
    }(createjs.Bitmap));
    objects.Backdrop2 = Backdrop2;
})(objects || (objects = {}));
//# sourceMappingURL=backdrop2.js.map