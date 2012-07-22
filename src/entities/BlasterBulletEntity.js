define(
  [
    "src/me",
    "src/entities/BlasterExplosion",
  ],
  function (
    me,
    BlasterExplosion
  ) {
      
  var BlasterBulletEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "blaster_bullet";
      this.parent(x, y, settings);
      
      this.name = "blaster_bullet";
      
      this.direction = direction;
      this.gravity = 0;
      this.passedDistance = 0;
    },
    
    update: function () {
      this.updateVelocity();
      this.updateMovement();
      this.updatePassedDistance();
      this.handleCollisions();
      return true;
    },
    
    updateVelocity: function () {
      this.vel.x = this.direction == "right" ? BlasterBulletEntity.SPEED : -BlasterBulletEntity.SPEED;
    },
    
    updatePassedDistance: function () {
      this.passedDistance += BlasterBulletEntity.SPEED;
      if (this.passedDistance > BlasterBulletEntity.RANGE) {
        me.game.remove(this);
      }
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if (this.vel.x == 0 || res) {
        me.game.remove(this);
      }
      
      if (res) {
        this.createExplosion();
      }
    },
    
    createExplosion: function () {
      var explosion = new BlasterExplosion(this.pos.x, this.pos.y + 8);
      me.game.add(explosion, this.z);
      me.game.sort();
    },
    
    onDestroyEvent: function () {
      me.gamestat.updateValue("aliveBlasterBulletCount", -1);
    },
    
  });
  
  BlasterBulletEntity.SPEED = 6;
  BlasterBulletEntity.WIDTH = 16;
  BlasterBulletEntity.RANGE = 160;
  
  return BlasterBulletEntity;
  
});
