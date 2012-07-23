define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var TurretBullet = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "turret_bullet";
      this.parent(x, y, settings);
      
      this.name = "turret_bullet";
      
      this.gravity = 0;
      this.vel.x = -5;
      this.isLethal = true;
    },
    
    update: function () {
      this.updateMovement();
      this.handleCollisions();
      return true;
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if (this.vel.x == 0 || (res && res.obj.isSolid)) {
        me.game.remove(this);
      }
    },
    
  });
  
  TurretBullet.WIDTH = 4;
  
  return TurretBullet;
  
});
