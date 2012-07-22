define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var BlasterBulletEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "blaster_bullet";
      this.parent(x, y, settings);
      
      this.direction = direction;
      this.gravity = 0;
      this.passedDistance = 0;
    },
    
    update: function () {
      this.vel.x = this.direction == "right" ? BlasterBulletEntity.SPEED : -BlasterBulletEntity.SPEED;
      this.updateMovement();
      
      this.passedDistance += BlasterBulletEntity.SPEED;
      if (this.passedDistance > BlasterBulletEntity.RANGE || this.vel.x == 0) {
        me.game.remove(this);
        me.gamestat.updateValue("aliveBlasterBulletCount", -1);
      }
      
      return true;
    },
    
  });
  
  BlasterBulletEntity.SPEED = 6;
  BlasterBulletEntity.WIDTH = 16;
  BlasterBulletEntity.RANGE = 160;
  
  return BlasterBulletEntity;
  
});
