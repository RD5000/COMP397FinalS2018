module scenes {
    export class TutorialScene extends objects.Scene {
      // Private Instance Variables
      private _infoLabel: objects.Label;
      private _infoLabel2: objects.Label;
      private _infoLabel3: objects.Label;
      private _creepLabel: objects.Label;
      private _enemyLabel: objects.Label;
      private _enemy2Label: objects.Label;
      private _restartButton: objects.Button;
      private _creepButton: objects.Button;
      private _enemyButton: objects.Button;
      private _enemy2Button: objects.Button;
      private _ocean: objects.Ocean;

  
      private _scoreboard: managers.ScoreBoard;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
      private _restartButtonClick():void {
        managers.Game.currentScene = config.Scene.START;
      }
     
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean();

        this._infoLabel = new objects.Label("The Objective of each level", "20px", "Dock51", "#800000", 10, 40, false);
        this._infoLabel2 = new objects.Label("Is to beat the super monsters a set amount of times", "20px", "Dock51", "#800000", 10, 60, false);
        this._infoLabel3 = new objects.Label("After doing so, you move to the next level", "20px", "Dock51", "#800000", 10, 80, false)
        this._creepLabel = new objects.Label("Creeps are weak, but many", "20px", "Dock51", "#FF9A00", 150, 200, false);
        this._enemyLabel = new objects.Label("Spiders are slow, but tough", "20px", "Dock51", "#FF9A00", 200, 250, false);
        this._enemy2Label = new objects.Label("Skorps are invisible, until hit", "20px", "Dock51", "#FF9A00",250, 300, false);
        

        this._restartButton = new objects.Button("backButton", 320, 440);
        this._creepButton = new objects.Button("cloud", 100, 200);
        this._enemyButton = new objects.Button("enemy", 150, 300);
        this._enemy2Button = new objects.Button("enemy2", 225, 350);
        
  
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
      
      }
    }
  }
  