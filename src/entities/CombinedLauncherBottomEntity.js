define(
  [
    "src/me",
    "src/util",
    "src/entities/DoubleLauncherBulletEntity",
    "src/entities/AwardPointsEntity",
  ],
  function (
    me,
    util,
    DoubleLauncherBulletEntity,
    AwardPointsEntity
  ) {
      
  var CombinedLauncherBottomEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "combined_launcher_bottom";
      this.parent(x, y, settings);
      
      this.collidable = true;
      this.captured = false;
      this.vitorc = null;
      this.resetFireDurationAndTimer();
    },
    
    update: function () {
      if (this.vitorc == null) {
        this.vitorc = me.game.getEntityByName("vitorc")[0];
      }
      this.fireTimer++;
      if (this.fireTimer > this.fireDuration) {
        this.resetFireDurationAndTimer();
        this.fire();
      }
    },
    
    resetFireDurationAndTimer: function () {
      this.fireDuration = util.getRandomInt(20, 160);
      this.fireTimer = 0;
    },
    
    fire: function () {
      if (!this.shouldFire()) {
        return;
      }
      var x = this.pos.x - DoubleLauncherBulletEntity.WIDTH;
      var y = this.pos.y;
      var bullet = new DoubleLauncherBulletEntity(x, y);
      me.game.add(bullet, this.z);
      me.game.sort.defer();
    },
    
    shouldFire: function () {
      if (this.vitorc.pos.x > this.pos.x - CombinedLauncherBottomEntity.STOP_FIRE_DISTANCE) {
        return false;
      }
      if (!this.vitorcIsInSight()) {
        return false;
      }
      return true;
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        this.capture();
      }
    },
    
    capture: function () {
      if (this.captured) {
        return;
      }
      this.captured = true;
      
      var award = new AwardPointsEntity(CombinedLauncherBottomEntity.POINTS);
      me.game.add(award, 999);
      me.game.sort.defer();
    },
    
    vitorcIsInSight: function () {
      if (this.vitorc.pos.y + this.vitorc.height < this.pos.y ||
          this.vitorc.pos.y > this.pos.y + this.height) {
        return false;
      }
      return true;
    },
    
  });
  
  CombinedLauncherBottomEntity.STOP_FIRE_DISTANCE = 80;
  CombinedLauncherBottomEntity.POINTS = 3000;
  
  return CombinedLauncherBottomEntity;
  
});
