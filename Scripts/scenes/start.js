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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
            createjs.Sound.stop();
        };
        StartScene.prototype.tutorialButtonClick = function () {
            managers.Game.currentScene = config.Scene.TUTOR;
            createjs.Sound.stop();
        };
        StartScene.prototype.endlessButtonClick = function () {
            managers.Game.currentScene = config.Scene.ENDLESS;
            createjs.Sound.stop();
        };
        // Public Methods
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            createjs.Sound.volume = 0.5;
            createjs.Sound.play("menuSong");
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("CAPTAIN ANT-MERICA", "60px", "Dock51", "#800000", 320, 240, true);
            this._startButton = new objects.Button("startButton", 100, 340);
            this._tutorialButton = new objects.Button("tutorialButton", 310, 340);
            this._endlessButton = new objects.Button("endlessButton", 520, 340);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            // add the startButton to the scene
            this.addChild(this._startButton);
            this.addChild(this._tutorialButton);
            this.addChild(this._endlessButton);
            this._startButton.on("click", this._startButtonClick);
            this._tutorialButton.on("click", this.tutorialButtonClick);
            this._endlessButton.on("click", this.endlessButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map