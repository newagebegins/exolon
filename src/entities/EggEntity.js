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
      this.parent(x, y, settings);
      
      if (settings.bounds) {
        this.bounds = new me.Rect(new me.Vector2d(settings.bounds.x, settings.bounds.y), settings.bounds.w, settings.bounds.h);;
      }
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      this.vel.x = util.getRandomArbitrary(-4, 2) + 1;
      this.vel.y = util.getRandomArbitrary(-1.5, 0.5) + 0.5;
      this.prevVelX = this.vel.x;
      this.prevVelY = this.vel.y;
    },
    
    updateMovement: function () {
      this.normalMove();
      this.shake();
      this.updateVel();
    },
    
    normalMove: function () {
      this.prevX = this.pos.x;
      this.prevY = this.pos.y;
      
      this.pos.add(this.vel);
      this.handleCollisions();
    },
    
    shake: function () {
      this.prevX = this.pos.x;
      this.prevY = this.pos.y;
      
      this.prevVelX = this.vel.x;
      this.prevVelY = this.vel.y;
      
      this.vel.x = 0;
      this.vel.y = util.getRandomArbitrary(-0.5, 0.5) * util.randomSign();
      
      this.pos.add(this.vel);
      this.handleCollisions();
      
      this.vel.x = this.prevVelX;
      this.vel.y = this.prevVelY;
    },
    
    updateVel: function () {
      var rnd = util.getRandomInt(0, 6);
      if (rnd == 0) {
        this.vel.x = -this.vel.x;
      }
      else if (rnd == 1) {
        this.vel.y = -this.vel.y;
      }
    },
    
    handleCollisions: function () {
      this.handleCollisionWithBounds();
      this.handleCollisionWithMap();
      this.handleCollisionWithScreenBounds();
    },
    
    handleCollisionWithBounds: function () {
      if (!this.bounds) {
        return;
      }
      
      if (this.right > this.bounds.right ||
          this.left < this.bounds.left) {
          
        this.pos.x = this.prevX;
        this.vel.x = -this.vel.x;
      }
      
      if (this.bottom > this.bounds.bottom ||
          this.top < this.bounds.top) {
          
        this.pos.y = this.prevY;
        this.vel.y = -this.vel.y;
      }
    },
    
    handleCollisionWithMap: function () {
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
    
    handleCollisionWithScreenBounds: function () {
      if (this.pos.x < 0) {
        this.pos.x = 0;
        this.vel.x = -this.vel.x;
      }
      else if (this.pos.x + this.width > 512) {
        this.pos.x = 512 - this.width;
        this.vel.x = -this.vel.x;
      }
      
      if (this.pos.y < 0) {
        this.pos.y = 0;
        this.vel.y = -this.vel.y;
      }
    },
    
    createSpecificExplosion: function (x, y) {
      return new BlasterExplosion(x, y);
    },
    
  });
  
  EggEntity.WIDTH = 16;
  EggEntity.HEIGHT = 16;
  
  return EggEntity;
  
});
