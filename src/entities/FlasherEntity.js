define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/UpAndDownMovementBehavior",
    "src/behaviors/AccelerationMovementBehavior",
    "src/behaviors/SwingMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    UpAndDownMovementBehavior,
    AccelerationMovementBehavior,
    SwingMovementBehavior
  ) {
      
  var FlasherEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "flasher";
      settings.spritewidth = FlasherEntity.WIDTH;
      settings.spriteheight = FlasherEntity.HEIGHT;
      this.parent(x, y + FlasherEntity.HEIGHT, settings);
      
      this.addAnimation("yellow", [0,1]);
      this.addAnimation("purple", [2,3]);
      this.addAnimation("cyan", [4,5]);
      this.addAnimation("green", [6,7]);
      this.addAnimation("white", [8,9]);
      this.addAnimation("red", [10,11]);
      
      this.setCurrentAnimation(util.arrayRandomElement(["green", "cyan", "purple", "yellow", "red", "white"]));
      
      this.animationspeed = 2;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      if (behavior == "acceleration") {
        this.behavior = new AccelerationMovementBehavior(this);
      }
      else if (behavior == "swing") {
        this.behavior = new SwingMovementBehavior(this);
      }
      else {
        this.behavior = new UpAndDownMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  FlasherEntity.WIDTH = 32;
  FlasherEntity.HEIGHT = 32;
  
  return FlasherEntity;
  
});
