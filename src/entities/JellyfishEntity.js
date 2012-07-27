define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/CircularMovementBehavior",
    "src/behaviors/SwingAndAccelerationMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    CircularMovementBehavior,
    SwingAndAccelerationMovementBehavior
  ) {
      
  var JellyfishEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "jellyfish";
      settings.spritewidth = JellyfishEntity.WIDTH;
      settings.spriteheight = JellyfishEntity.HEIGHT;
      this.parent(x, y + JellyfishEntity.HEIGHT, settings);
      
      this.addAnimation("yellow", [0,1,2,1]);
      this.addAnimation("purple", [3,4,5,4]);
      this.addAnimation("cyan", [6,7,8,7]);
      this.addAnimation("green", [9,10,11,10]);
      this.addAnimation("white", [12,13,14,13]);
      this.addAnimation("red", [15,16,17,16]);
      
      this.setCurrentAnimation(util.arrayRandomElement(["green", "cyan", "purple", "yellow", "red", "white"]));
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      if (behavior == "circular") {
        this.behavior = new CircularMovementBehavior(this);
      }
      else if (behavior == "swing_and_acceleration") {
        this.behavior = new SwingAndAccelerationMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  JellyfishEntity.WIDTH = 32;
  JellyfishEntity.HEIGHT = 32;
  
  return JellyfishEntity;
  
});
