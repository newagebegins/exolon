define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var TurretTubeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, turret) {
      var settings = {};
      settings.image = "turret_tube";
      settings.spritewidth = TurretTubeEntity.WIDTH;
      
      this.parent(x, y, settings);
      
      this.turret = turret;
      this.collidable = true;
      
      this.addAnimation("default", [0]);
      this.setCurrentAnimation("default");
    },
    
    onCollision: function (res, obj) {
      this.turret.onCollision(res, obj);
    },
    
  });
  
  TurretTubeEntity.WIDTH = 32;
  
  return TurretTubeEntity;
  
});
