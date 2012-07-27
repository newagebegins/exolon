define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/LouseEntity",
  ],
  function (
    KamikazeCreatorEntity,
    LouseEntity
  ) {
      
  var LouseCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 0.8,
    
    init: function (x, y, settings) {
      this.parent();
      this.behavior = settings.behavior;
    },
    
    createSpecificKamikaze: function (x, y) {
      return new LouseEntity(x, y, this.behavior);
    },
    
  });
  
  return LouseCreatorEntity;
  
});
