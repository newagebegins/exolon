define(
  [
    "src/entities/ObstacleEntity",
  ],
  function (
    ObstacleEntity
  ) {
      
  var RocketEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "rocket";
      this.parent(x, y, settings);
      
      this.updateColRect(12, 52, 10, 86);
    },
    
  });
  
  return RocketEntity;
  
});
