define(
  [
    "src/me",
    "src/entities/TurretTubeEntity",
  ],
  function (
    me,
    TurretTubeEntity
  ) {
      
  var TurretEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "turret_body";
      settings.spritewidth = 64;
      
      this.parent(x + 32, y, settings);
      
      this.collidable = true;
      
      this.createTube(settings.z);
    },
    
    createTube: function (z) {
      var tube = new TurretTubeEntity(this.pos.x - TurretTubeEntity.WIDTH, this.pos.y + 32);
      me.game.add(tube, z);
      me.game.sort();
    },
    
  });
  
  return TurretEntity;
  
});
