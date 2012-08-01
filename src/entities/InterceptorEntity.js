define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/SwingAndAccelerationMovementBehavior",
    "src/behaviors/AccelerationMovementBehavior",
    "src/behaviors/ZigZagMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    SwingAndAccelerationMovementBehavior,
    AccelerationMovementBehavior,
    ZigZagMovementBehavior
  ) {
      
  var InterceptorEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "interceptor";
      settings.spritewidth = InterceptorEntity.WIDTH;
      settings.spriteheight = InterceptorEntity.HEIGHT;
      this.parent(x, y + InterceptorEntity.HEIGHT, settings);
      
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
      
      if (behavior == "acceleration") {
        this.behavior = new AccelerationMovementBehavior(this);
      }
      else if (behavior == "zig_zag") {
        this.behavior = new ZigZagMovementBehavior(this);
      }
      else {
        this.behavior = new SwingAndAccelerationMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  InterceptorEntity.WIDTH = 32;
  InterceptorEntity.HEIGHT = 32;
  
  return InterceptorEntity;
  
});
