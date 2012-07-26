define(
  [
    "src/entities/ObstacleEntity",
  ],
  function (
    ObstacleEntity
  ) {
      
  var FungusEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "fungus";
      this.parent(x, y, settings);
    },
    
  });
  
  return FungusEntity;
  
});
