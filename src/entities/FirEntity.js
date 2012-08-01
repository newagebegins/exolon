define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/ZigZagMovementBehavior",
    "src/behaviors/SwingAndAccelerationMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    ZigZagMovementBehavior,
    SwingAndAccelerationMovementBehavior
  ) {
      
  var FirEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "fir";
      settings.spritewidth = FirEntity.WIDTH;
      settings.spriteheight = FirEntity.HEIGHT;
      this.parent(x, y + FirEntity.HEIGHT, settings);
      
      this.addAnimation("yellow", [0]);
      this.addAnimation("purple", [1]);
      this.addAnimation("cyan", [2]);
      this.addAnimation("green", [3]);
      this.addAnimation("white", [4]);
      this.addAnimation("red", [5]);
      
      this.setCurrentAnimation(util.arrayRandomElement(["green", "cyan", "purple", "yellow", "red", "white"]));
      
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      if (behavior == "swing_and_acceleration") {
        this.behavior = new SwingAndAccelerationMovementBehavior(this);
      }
      else {
        this.behavior = new ZigZagMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  FirEntity.WIDTH = 32;
  FirEntity.HEIGHT = 32;
  
  return FirEntity;
  
});
