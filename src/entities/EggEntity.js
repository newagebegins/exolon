define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
  ],
  function (
    util,
    KamikazeEntity
  ) {
      
  var EggEntity = KamikazeEntity.extend({
    
    points: 50,
    
    init: function (x, y, bounds) {
      var settings = {};
      settings.image = "egg";
      settings.spritewidth = EggEntity.WIDTH;
      this.parent(x, y + EggEntity.HEIGHT, settings);
      
      this.bounds = bounds;
      this.increaseBounds = false;
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      this.vel.x = util.getRandomArbitrary(-2.5, 1.5) + 0.5;
      this.vel.y = util.getRandomArbitrary(-0.4, 0.3) + 0.1;
    },
    
    updateMovement: function () {
      this.pos.x += this.vel.x;
      
      if (this.right > this.bounds.right ||
          this.left < this.bounds.left) {
          
        if (this.increaseBounds) {
          if (this.right > this.bounds.right) {
            this.bounds.width += EggEntity.BOUNDS_INC;
          }
          else if (this.left < this.bounds.left) {
            this.bounds.pos.x -= EggEntity.BOUNDS_INC;
          }
        }
        
        this.pos.x -= this.vel.x;
        this.vel.x = -this.vel.x;
      }
      
      this.prevY = this.pos.y;
      
      this.pos.y += this.vel.y;
      this.pos.y += util.getRandomArbitrary(0.1, 0.5) * Math.sin(this.pos.x / 2);
      
      if (this.bottom > this.bounds.bottom ||
          this.top < this.bounds.top) {
          
        if (this.increaseBounds) {
          if (this.bottom > this.bounds.bottom) {
            this.bounds.height += EggEntity.BOUNDS_INC;
          }
          else if (this.top < this.bounds.top) {
            this.bounds.pos.y -= EggEntity.BOUNDS_INC;
          }
        }
        
        this.pos.y = this.prevY;
        this.vel.y = -this.vel.y;
      }
    },
    
  });
  
  EggEntity.WIDTH = 16;
  EggEntity.HEIGHT = 16;
  EggEntity.BOUNDS_INC = 8;
  
  return EggEntity;
  
});
