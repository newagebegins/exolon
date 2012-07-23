define(
  [
    "src/entities/ObstacleEntity",
  ],
  function (
    ObstacleEntity
  ) {
      
  var CocoonEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "cocoon";
      this.parent(x, y, settings);
    },
    
  });
  
  return CocoonEntity;
  
});
