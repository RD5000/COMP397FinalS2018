module managers {
  export class Collision {

    public static Check(object1: objects.GameObject, object2: objects.GameObject) {
      // create two vec2 objects
      let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
      let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
        if (!object2.isColliding) {
          object2.isColliding = true;
          switch (object2.name) {
            case "coin":
              if ((object2.alpha == 1 ) && (object1.alpha ==1)) {

                // add a life power up
                managers.Game.scoreBoard.Score += 200;
                object2.alpha = 0;

                if (managers.Game.scoreBoard.Score % 1000 == 0){
                  managers.Game.scoreBoard.Lives *= 2;
                  createjs.Sound.play("life");
                  
                }
                else  if (managers.Game.scoreBoard.Score % 100 == 0) {
                  managers.Game.scoreBoard.Lives += 50;
                  createjs.Sound.play("life");
                }

                if (managers.Game.HighScore <= managers.Game.scoreBoard.Score) {
                  managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                  managers.Game.HighScore = managers.Game.scoreBoard.HighScore;
                }
              }
              break;
            case "cloud":
              if (object1.name == "bullet") {
                managers.Game.scoreBoard.Score += 10;
                object2.Reset();
                if (managers.Game.scoreBoard.Score % 1000 == 0) {
                  managers.Game.scoreBoard.Lives += 10;
                  createjs.Sound.play("life");
                }
              }
              else if (object1.alpha == 1) {
                createjs.Sound.play("explosion");
                managers.Game.scoreBoard.Lives -= 5;
                object2.Reset();
              }
              break;
            case "enemy":
              if ((object1.name == "plane") && (object1.alpha == 1)) {
                createjs.Sound.play("explosion");
                managers.Game.scoreBoard.Lives -= 25;
                object2.Reset();
              }
              else if (object1.alpha == 1) {
                object1.Reset();
                object2.Collision();
                
              }
              break;
            case "enemy2":
              if ((object1.alpha == 1)&&(object1.name == "plane") )   {
                createjs.Sound.play("explosion");
                managers.Game.scoreBoard.Lives -= 25;
                object2.Reset();
              }
              else if ((object1.name == "bullet") && (object1.alpha == 1)) {
                object1.Reset();
                object2.Collision();
                
              }
              break;
          }
        }
      }
      else {
        object2.isColliding = false;
      }
    }
  }
}
