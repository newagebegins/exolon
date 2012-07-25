define(
  [
    "src/entities/ObstacleEntity",
  ],
  function (
    ObstacleEntity
  ) {
      
  var WaggonEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "waggon";
      this.parent(x, y, settings);
    },
    
  });
  
  return WaggonEntity;
  
});
