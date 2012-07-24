define(
  [
    "src/me",
    "src/entities/BlasterExplosion",
  ],
  function (
    me,
    BlasterExplosion
  ) {
      
  var DoubleLauncherBulletEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "double_launcher_bullet";
      this.parent(x, y + DoubleLauncherBulletEntity.HEIGHT, settings);
      
      this.updateColRect(-1, 0, 4, 6);
      
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
      var hitVitorc = res && (res.obj.isSolid || res.obj.name == "vitorc");
      
      if (this.vel.x == 0 || hitVitorc) {
        me.game.remove(this);
      }
      
      if (hitVitorc) {
        this.createExplosion();
      }
    },
    
    createExplosion: function () {
      var explosion = new BlasterExplosion(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z);
      me.game.sort.defer();
    },
    
  });
  
  DoubleLauncherBulletEntity.WIDTH = 16;
  DoubleLauncherBulletEntity.HEIGHT = 16;
  
  return DoubleLauncherBulletEntity;
  
});
