define(
  [
    "src/entities/DoubleLauncherEntity",
    "src/entities/DoubleLauncherBulletEntity",
  ],
  function (
    DoubleLauncherEntity,
    DoubleLauncherBulletEntity
  ) {
      
  var CombinedLauncherBottomEntity = DoubleLauncherEntity.extend({
    
    points: 3000,
    
    getSpriteImage: function () {
      return "combined_launcher_bottom";
    },
    
    getBulletPosition: function () {
      var pos = {};
      pos.x = this.pos.x - DoubleLauncherBulletEntity.WIDTH;
      pos.y = this.pos.y;
      return pos;
    },
    
  });
  
  return CombinedLauncherBottomEntity;
  
});
