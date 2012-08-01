define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/UpAndDownMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    UpAndDownMovementBehavior
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
      
      this.behavior = new UpAndDownMovementBehavior(this);
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  FirEntity.WIDTH = 32;
  FirEntity.HEIGHT = 32;
  
  return FirEntity;
  
});
