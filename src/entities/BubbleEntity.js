define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/SwingMovementBehavior",
    "src/behaviors/CircularMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    SwingMovementBehavior,
    CircularMovementBehavior
  ) {
      
  var BubbleEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "bubble";
      settings.spritewidth = BubbleEntity.WIDTH;
      settings.spriteheight = BubbleEntity.HEIGHT;
      this.parent(x, y + BubbleEntity.HEIGHT, settings);
      
      this.addAnimation("green", [0,1,2]);
      this.addAnimation("cyan", [3,4,5]);
      this.addAnimation("purple", [6,7,8]);
      this.addAnimation("yellow", [9,10,11]);
      this.addAnimation("red", [12,13,14]);
      this.addAnimation("white", [15,16,17]);
      
      this.setCurrentAnimation(util.arrayRandomElement(["green", "cyan", "purple", "yellow", "red", "white"]));
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      if (behavior == "circular") {
        this.behavior = new CircularMovementBehavior(this);
      }
      else {
        this.behavior = new SwingMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  BubbleEntity.WIDTH = 32;
  BubbleEntity.HEIGHT = 32;
  
  return BubbleEntity;
  
});
