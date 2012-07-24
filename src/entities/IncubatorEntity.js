define(
  [
    "src/entities/ObstacleEntity",
  ],
  function (
    ObstacleEntity
  ) {
      
  var IncubatorEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "incubator";
      this.parent(x, y, settings);
    },
    
  });
  
  return IncubatorEntity;
  
});
