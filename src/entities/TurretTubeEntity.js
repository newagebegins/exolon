define(
  [
    "src/me",
    "src/util",
    "src/entities/TurretBullet",
  ],
  function (
    me,
    util,
    TurretBullet
  ) {
      
  var TurretTubeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, turret) {
      var settings = {};
      settings.image = "turret_tube";
      settings.spritewidth = TurretTubeEntity.WIDTH;
      
      this.parent(x, y, settings);
      
      this.turret = turret;
      this.collidable = true;
      this.isSolid = true;
      
      this.addAnimation("default", [0]);
      this.addAnimation("fire", [7,6,5,4,3,2,1,0]);
      this.setCurrentAnimation("default");
      
      this.animationspeed = 1;
      
      this.resetFireDurationAndTimer();
    },
    
    update: function () {
      this.updateFireTimer();
      return this.parent();
    },
    
    onCollision: function (res, obj) {
      this.turret.onCollision(res, obj);
    },
    
    updateFireTimer: function () {
      this.fireTimer++;
      if (this.fireTimer > this.fireDuration) {
        this.resetFireDurationAndTimer();
        this.fire();
      }
    },
    
    fire: function () {
      this.setCurrentAnimation("fire", "default");
      this.createBullet();
    },
    
    resetFireDurationAndTimer: function () {
      this.fireDuration = util.getRandomInt(20, 200);
      this.fireTimer = 0;
    },
    
    createBullet: function () {
      var bullet = new TurretBullet(this.pos.x - TurretBullet.WIDTH, this.pos.y + 10);
      me.game.add(bullet, this.z);
      me.game.sort.defer();
    },
    
  });
  
  TurretTubeEntity.WIDTH = 32;
  
  return TurretTubeEntity;
  
});
