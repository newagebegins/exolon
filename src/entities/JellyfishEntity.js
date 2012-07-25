define(
  [
    "src/me",
    "src/util",
    "src/entities/KamikazeEntity",
  ],
  function (
    me,
    util,
    KamikazeEntity
  ) {
      
  var JellyfishEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y) {
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
      
      this.pos.y += util.getRandomArbitrary(-4, 0);
      this.pos.x += util.getRandomArbitrary(0, 32);
      
      this.swing = true;
      this.vel.x = JellyfishEntity.SPEED_NORMAL;
      
      this.straightFlyTimer = 0;
      this.straightFlyDuration = 40;
    },
    
    updateMovement: function () {
      if (this.pos.x < 336) {
        this.swing = false;
      }
      
      if (this.swing) {
        this.pos.y += util.getRandomArbitrary(1, 3) * Math.sin(this.pos.x / 20);
      }
      else {
        this.straightFlyTimer++;
        if (this.straightFlyTimer > this.straightFlyDuration) {
          this.vel.x = JellyfishEntity.SPEED_FAST;
        }
      }
      
      this.pos.x -= this.vel.x;
      
    },
    
  });
  
  JellyfishEntity.WIDTH = 32;
  JellyfishEntity.HEIGHT = 32;
  JellyfishEntity.SPEED_NORMAL = 1.5;
  JellyfishEntity.SPEED_FAST = 4;
  
  return JellyfishEntity;
  
});
