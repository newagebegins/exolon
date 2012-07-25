define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
    "src/entities/EggEntity",
  ],
  function (
    me,
    ObstacleEntity,
    EggEntity
  ) {
      
  var IncubatorEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "incubator";
      this.parent(x, y, settings);
      
      this.eggs = [];
      this.createEggs(settings.z);
    },
    
    createEggs: function (z) {
      for (var i = 0; i < IncubatorEntity.EGG_COUNT; ++i) {
        var bounds = {x: this.pos.x + 16, y: this.pos.y + 16, w: 32, h: 32};
        var egg = new EggEntity(this.pos.x + 20, this.pos.y + 20, {bounds: bounds});
        me.game.add(egg, z);
        this.eggs.push(egg);
      }
      me.game.sort.defer();
    },
    
    onDestroyEvent: function () {
      for (var i in this.eggs) {
        this.eggs[i].increaseBounds = true;
      }
    },
    
  });
  
  IncubatorEntity.EGG_COUNT = 8;
  
  return IncubatorEntity;
  
});
