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
    var TutorialScene = /** @class */ (function (_super) {
        __extends(TutorialScene, _super);
        // Public Properties
        // Constructor
        function TutorialScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        TutorialScene.prototype._restartButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        // Initialize Game Variables and objects
        TutorialScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._infoLabel = new objects.Label("The Objective of each level", "20px", "Dock51", "#800000", 10, 40, false);
            this._infoLabel2 = new objects.Label("Is to beat the super monsters a set amount of times", "20px", "Dock51", "#800000", 10, 60, false);
            this._infoLabel3 = new objects.Label("After doing so, you move to the next level", "20px", "Dock51", "#800000", 10, 80, false);
            this._creepLabel = new objects.Label("Creeps are weak, but many", "20px", "Dock51", "#FF9A00", 150, 200, false);
            this._enemyLabel = new objects.Label("Spiders are slow, but tough", "20px", "Dock51", "#FF9A00", 200, 250, false);
            this._enemy2Label = new objects.Label("Skorps are invisible, until hit", "20px", "Dock51", "#FF9A00", 250, 300, false);
            this._restartButton = new objects.Button("backButton", 320, 440);
            this._creepButton = new objects.Button("cloud", 100, 200);
            this._enemyButton = new objects.Button("enemy", 150, 300);
            this._enemy2Button = new objects.Button("enemy2", 225, 350);
            this.Main();
        };
        TutorialScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        TutorialScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel2);
            this.addChild(this._infoLabel3);
            this.addChild(this._creepLabel);
            this.addChild(this._enemyLabel);
            this.addChild(this._enemy2Label);
            // add the backButton to the scene
            this.addChild(this._restartButton);
            this.addChild(this._creepButton);
            this.addChild(this._enemyButton);
            this.addChild(this._enemy2Button);
            // add scoreboard to the scene
            // event listeners
            this._restartButton.on("click", this._restartButtonClick);
        };
        return TutorialScene;
    }(objects.Scene));
    scenes.TutorialScene = TutorialScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map