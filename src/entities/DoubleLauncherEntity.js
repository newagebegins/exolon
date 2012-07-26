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
    
    points: 2000,
    
    init: function (x, y, settings) {
      settings.image = this.getSpriteImage();
      this.parent(x, y, settings);
      
      this.collidable = true;
      this.captured = false;
      this.vitorc = null;
      this.resetFireDurationAndTimer();
    },
    
    getSpriteImage: function () {
      return "double_launcher";
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
      var pos = this.getBulletPosition();
      var bullet = new DoubleLauncherBulletEntity(pos.x, pos.y);
      me.game.add(bullet, this.z);
      me.game.sort.defer();
    },
    
    getBulletPosition: function () {
      var pos = {};
      pos.x = this.pos.x - DoubleLauncherBulletEntity.WIDTH;
      pos.y = util.arrayRandomElement([this.pos.y, this.pos.y + 16]);
      return pos;
    },
    
    shouldFire: function () {
      if (this.vitorcTooClose()) {
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
      
      var award = new AwardPointsEntity(this.points);
      me.game.add(award, 999);
      me.game.sort.defer();
    },
    
    vitorcTooClose: function () {
      return this.vitorc.pos.x > this.pos.x - DoubleLauncherEntity.STOP_FIRE_DISTANCE
    },
    
    vitorcIsInSight: function () {
      if (this.vitorc.pos.y + this.vitorc.height < this.pos.y ||
          this.vitorc.pos.y > this.pos.y + this.height) {
        return false;
      }
      return true;
    },
    
  });
  
  DoubleLauncherEntity.STOP_FIRE_DISTANCE = 110;
  
  return DoubleLauncherEntity;
  
});
