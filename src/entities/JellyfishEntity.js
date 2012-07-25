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
      
      this.pos.y += util.getRandomArbitrary(-16, 16);
      this.moveType = "straight_1";
      this.moveAngle = Math.PI;
    },
    
    updateMovement: function () {
      if (this.moveType == "straight_1" && this.pos.x < JellyfishEntity.START_CIRCULAR_MOTION_X) {
        this.moveType = "circular";
      }
      
      if (this.moveType == "straight_1" || this.moveType == "straight_2") {
        this.pos.x -= JellyfishEntity.SPEED;
      }
      else if (this.moveType == "circular") {
        var x = Math.cos(this.moveAngle) * JellyfishEntity.CIRCULAR_MOTION_RADIUS;
        var y = Math.sin(this.moveAngle) * JellyfishEntity.CIRCULAR_MOTION_RADIUS;
        
        this.pos.x += x / 20;
        this.pos.y += y / 18;
        
        this.moveAngle += 0.05;
        
        if (this.moveAngle >=  3 * Math.PI)  {
          this.moveType = "straight_2";
        }
      }
    },
    
  });
  
  JellyfishEntity.WIDTH = 32;
  JellyfishEntity.HEIGHT = 32;
  JellyfishEntity.SPEED = 3;
  JellyfishEntity.START_CIRCULAR_MOTION_X = 220;
  JellyfishEntity.CIRCULAR_MOTION_RADIUS = 64;
  
  return JellyfishEntity;
  
});
