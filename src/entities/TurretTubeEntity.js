define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var TurretTubeEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "turret_tube";
      settings.spritewidth = TurretTubeEntity.WIDTH;
      
      this.parent(x, y, settings);
    },
    
  });
  
  TurretTubeEntity.WIDTH = 32;
  
  return TurretTubeEntity;
  
});
