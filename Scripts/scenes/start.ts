module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _tutorialButton: objects.Button;
    private _endlessButton: objects.Button;
    private _ocean: objects.Ocean;
    


    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      managers.Game.currentScene = config.Scene.PLAY;
      createjs.Sound.stop();
    }
    private tutorialButtonClick():void {
      managers.Game.currentScene = config.Scene.TUTOR;
      createjs.Sound.stop();
    }
    private endlessButtonClick():void {
      managers.Game.currentScene = config.Scene.ENDLESS;
      createjs.Sound.stop();
    }



    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      createjs.Sound.volume = 0.5;
      createjs.Sound.play("menuSong");
      this._ocean = new objects.Ocean();

      this._welcomeLabel = new objects.Label("CAPTAIN ANT-MERICA", "60px", "Dock51", "#800000", 320, 240, true);
      this._startButton = new objects.Button("startButton", 100, 340);
      this._tutorialButton = new objects.Button("tutorialButton", 310, 340);
      this._endlessButton = new objects.Button("endlessButton", 520, 340);
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    // This is where the fun happens
    public Main(): void {
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
    }
  }
}
