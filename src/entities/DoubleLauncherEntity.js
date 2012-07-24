define(
  [
    "src/me",
    "src/util",
    "src/entities/DoubleLauncherBulletEntity",
  ],
  function (
    me,
    util,
    DoubleLauncherBulletEntity
  ) {
      
  var DoubleLauncherEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "double_launcher";
      this.parent(x, y, settings);
      
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
      this.fireDuration = util.getRandomInt(20, 200);
      this.fireTimer = 0;
    },
    
    fire: function () {
      if (this.vitorc.pos.x > this.pos.x - DoubleLauncherEntity.STOP_FIRE_DISTANCE) {
        return;
      }
      var x = this.pos.x - DoubleLauncherBulletEntity.WIDTH;
      var y = util.arrayRandomElement([this.pos.y, this.pos.y + 16]);
      var bullet = new DoubleLauncherBulletEntity(x, y);
      me.game.add(bullet, this.z);
      me.game.sort.defer();
    },
    
  });
  
  DoubleLauncherEntity.STOP_FIRE_DISTANCE = 64;
  
  return DoubleLauncherEntity;
  
});
