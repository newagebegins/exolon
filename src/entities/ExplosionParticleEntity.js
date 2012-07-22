define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var ExplosionParticleEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "explosion_particle";
      settings.spritewidth = 32;
      
      this.parent(x, y, settings);
      
      this.addAnimation("yellow", [0]);
      this.addAnimation("white", [1]);
      this.addAnimation("green", [2]);
      this.addAnimation("cyan", [3]);
      
      this.gravity = 0;
      
      this.setRandomColor();
      this.setRandomVelocity();
      
      if (this.accel.x > 0) {
        this.flipX(true);
      }
    },
    
    update: function () {
      this.updateMovement();
      this.handleCollisions();
    },
    
    setRandomColor: function () {
      this.setCurrentAnimation(util.arrayRandomElement(["yellow", "white", "green", "cyan"]));
    },
    
    setRandomVelocity: function () {
      this.vel.x = 0.01 * util.randomSign();
      this.vel.y = 0.01 * util.randomSign();
      
      this.accel.x = Math.random() * 0.4 + 0.01;
      if (this.vel.x < 0) {
        this.accel.x *= -1;
      }
      
      this.accel.y = Math.random() * 0.4 + 0.01;
      if (this.vel.y < 0) {
        this.accel.y *= -1;
      }
      
      this.maxVel.x = Math.random() * 7 + 3;
      this.maxVel.y = Math.random() * 7 + 3;
    },
    
    updateMovement: function () {
      this.vel.x += this.accel.x * me.timer.tick;
      if (Math.abs(this.vel.x) > this.maxVel.x) {
        if (this.vel.x > 0) {
          this.vel.x = this.maxVel.x;
        }
        else {
          this.vel.x = -this.maxVel.x;
        }
      }
      
      this.vel.y += this.accel.y * me.timer.tick;
      if (Math.abs(this.vel.y) > this.maxVel.y) {
        if (this.vel.y > 0) {
          this.vel.y = this.maxVel.y;
        }
        else {
          this.vel.y = -this.maxVel.y;
        }
      }
      
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    },
    
    handleCollisions: function () {
      if (this.pos.x + this.width < 0 ||
          this.pos.x > 512 ||
          this.pos.y + this.height < 0 ||
          this.pos.y + this.height > 352)
      {
        me.game.remove(this);
      }
    },
    
  });
  
  return ExplosionParticleEntity;
  
});
