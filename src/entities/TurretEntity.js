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
      this.tube = null;
      
      this.createTube(settings.z);
    },
    
    createTube: function (z) {
      this.tube = new TurretTubeEntity(this.pos.x - TurretTubeEntity.WIDTH, this.pos.y + 32, this);
      me.game.add(this.tube, z);
      me.game.sort();
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "grenade") {
        this.createExplosion();
        me.game.remove(this.tube);
        me.game.remove(this);
      }
    },
    
    createExplosion: function () {
      // to be implemented
    },
    
  });
  
  return TurretEntity;
  
});
