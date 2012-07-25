define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
    "src/entities/TurretTubeEntity",
  ],
  function (
    me,
    ObstacleEntity,
    TurretTubeEntity
  ) {
      
  var CombinedLauncherTopEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "combined_launcher_top";
      this.parent(x, y, settings);
      
      this.tube = null;
      this.createTube(settings.z);
    },
    
    createTube: function (z) {
      this.tube = new TurretTubeEntity(this.pos.x - 16, this.pos.y, this);
      me.game.add(this.tube, z);
      me.game.sort.defer();
    },
    
    onDestroyEvent: function () {
      me.game.remove(this.tube);
    },
    
  });
  
  return CombinedLauncherTopEntity;
  
});
