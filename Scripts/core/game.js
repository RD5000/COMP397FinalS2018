/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        //Visual Assets
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "cloud", src: "./Assets/images/cloud.png" },
        { id: "enemy", src: "./Assets/images/enemy1.png" },
        { id: "enemy2", src: "./Assets/images/skorp.png" },
        { id: "coin", src: "./Assets/images/coin10.png" },
        { id: "island", src: "./Assets/images/island.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "restartButton", src: "./Assets/images/restartButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "tutorialButton", src: "./Assets/images/clickMeButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "endlessButton", src: "./Assets/images/nextButton.png" },
        { id: "backdrop", src: "./Assets/images/ocean.gif" },
        { id: "backdrop2", src: "./Assets/images/ocean2.gif" },
        { id: "backdrop3", src: "./Assets/images/ocean3.gif" },
        //Sounds
        { id: "life", src: "./Assets/audio/life.wav" },
        { id: "explosion", src: "./Assets/audio/explosion.mp3" },
        { id: "bulletSound", src: "./Assets/audio/bullet.mp3" },
        { id: "menuSong", src: "./Assets/audio/blockbuster.mp3" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // initialize performance counting
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.assetManager = assetManager;
        Main();
    }
    function Update() {
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
        stage.removeAllChildren();
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene();
                break;
            case config.Scene.PLAY2:
                currentScene = new scenes.PlayScene2();
                break;
            case config.Scene.PLAY3:
                currentScene = new scenes.PlayScene3();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene();
                break;
            case config.Scene.WIN:
                currentScene = new scenes.WinScene();
                break;
            case config.Scene.TUTOR:
                currentScene = new scenes.TutorialScene();
                break;
            case config.Scene.ENDLESS:
                currentScene = new scenes.EndlessScene();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map