module managers {
  export class Game {
    public static stage: createjs.Stage;
    public static assetManager: createjs.LoadQueue;
    public static currentScene: number;
    public static currentSceneObject: objects.Scene;
    public static scoreBoard: managers.ScoreBoard;
    public static keyboardManager: managers.Keyboard;
    public static HighScore: number = 0;
    public static enemyKills: number = 0;
    public static plane: objects.Plane;
    public static bulletManger: managers.Bullet;
  }
}
