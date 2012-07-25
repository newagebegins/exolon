define(
  [
    "src/me",
    "src/util",
    "src/entities/KamikazeEntity",
    "src/entities/BlasterExplosion",
  ],
  function (
    me,
    util,
    KamikazeEntity,
    BlasterExplosion
  ) {
      
  var EggEntity = KamikazeEntity.extend({
    
    points: 50,
    
    init: function (x, y, settings) {
      settings.image = "egg";
      settings.spritewidth = EggEntity.WIDTH;
      this.parent(x, y + EggEntity.HEIGHT, settings);
      
      if (!settings.bounds) {
        settings.bounds = {x: x, y: y + EggEntity.HEIGHT , w: EggEntity.WIDTH, h: EggEntity.HEIGHT};
      }
      this.bounds = new me.Rect(new me.Vector2d(settings.bounds.x, settings.bounds.y), settings.bounds.w, settings.bounds.h);;
      this.increaseBounds = settings.increaseBounds ? settings.increaseBounds : false;
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      this.vel.x = util.getRandomArbitrary(-4, 2) + 1;
      this.vel.y = util.getRandomArbitrary(-1.5, 1) + 0.5;
    },
    
    updateMovement: function () {
      this.prevX = this.pos.x;
      this.prevY = this.pos.y;
      
      this.pos.add(this.vel);
      this.pos.y += util.getRandomArbitrary(0.1, 0.5) * Math.sin(this.pos.x / 4);
      
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
        
        this.pos.x = this.prevX;
        this.vel.x = -this.vel.x;
      }
      
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
      
      var res = this.collisionMap.checkCollision(this.collisionBox, this.vel);
      
      if (res) {
        this.pos.sub(res);
        
        if (res.y) {
          this.vel.y = -this.vel.y;
        }
        if (res.x) {
          this.vel.x = -this.vel.x;
        }
      }
    },
    
    createSpecificExplosion: function (x, y) {
      return new BlasterExplosion(x, y);
    },
    
  });
  
  EggEntity.WIDTH = 16;
  EggEntity.HEIGHT = 16;
  EggEntity.BOUNDS_INC = 8;
  
  return EggEntity;
  
});
