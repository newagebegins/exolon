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
      
  var DoubleLauncherEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "double_launcher";
      this.parent(x, y, settings);
      
      this.collidable = true;
      this.captured = false;
      this.vitorc = me.game.getEntityByName("vitorc")[0];
      this.resetFireDurationAndTimer();
    },
    
    update: function () {
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
      var y = util.arrayRandomElement([this.pos.y, this.pos.y + 16]);
      var bullet = new DoubleLauncherBulletEntity(x, y);
      me.game.add(bullet, this.z);
      me.game.sort.defer();
    },
    
    shouldFire: function () {
      if (this.vitorc.pos.x > this.pos.x - DoubleLauncherEntity.STOP_FIRE_DISTANCE) {
        return false;
      }
      if (this.vitorc.pos.y + this.vitorc.height < this.pos.y) {
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
      
      var award = new AwardPointsEntity(DoubleLauncherEntity.POINTS);
      me.game.add(award, 999);
      me.game.sort.defer();
    },
    
  });
  
  DoubleLauncherEntity.STOP_FIRE_DISTANCE = 80;
  DoubleLauncherEntity.POINTS = 2000;
  
  return DoubleLauncherEntity;
  
});
