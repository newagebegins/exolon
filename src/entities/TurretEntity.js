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
      
  var TurretEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "turret_body";
      settings.spritewidth = 64;
      this.parent(x + 32, y, settings);
      
      this.updateColRect(8, 48, -1, 0);
      this.tube = null;
      this.createTube(settings.z);
    },
    
    createTube: function (z) {
      this.tube = new TurretTubeEntity(this.pos.x - TurretTubeEntity.WIDTH, this.pos.y + 32, this);
      me.game.add(this.tube, z);
      me.game.sort();
    },
    
    onDestroyEvent: function () {
      me.game.remove(this.tube);
    },
    
  });
  
  return TurretEntity;
  
});
