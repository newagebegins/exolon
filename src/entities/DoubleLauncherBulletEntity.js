define(
  [
    "src/me",
    "src/util",
    "src/entities/BlasterExplosion",
  ],
  function (
    me,
    util,
    BlasterExplosion
  ) {
      
  var DoubleLauncherBulletEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "double_launcher_bullet";
      this.parent(x, y + DoubleLauncherBulletEntity.HEIGHT, settings);
      
      this.gravity = 0;
      this.vel.x = -3;
      this.isLethal = true;
      this.isDestroyable = true;
      this.collidable = true;
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
    
    onCollision: function (res, obj) {
      if (obj.name == "blaster_bullet") {
        me.game.remove(this);
        this.createExplosion();
        util.updatePoints(50);
      }
    },
    
    createExplosion: function () {
      var explosion = new BlasterExplosion(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z);
      me.game.sort.defer();
      
      me.audio.play("burst");
    },
    
  });
  
  DoubleLauncherBulletEntity.WIDTH = 16;
  DoubleLauncherBulletEntity.HEIGHT = 16;
  
  return DoubleLauncherBulletEntity;
  
});
