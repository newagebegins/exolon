define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
  ],
  function (
    me,
    ObstacleEntity
  ) {
      
  var MissileGuidanceEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "missile_guidance";
      this.parent(x, y, settings);
    },
    
  });
  
  return MissileGuidanceEntity;
  
});
