define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
  ],
  function (
    me,
    ObstacleEntity
  ) {
      
  var RadarEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "radar";
      this.parent(x, y, settings);
      
      this.updateColRect(6, 68, -1, 0);
    },
    
  });
  
  return RadarEntity;
  
});
