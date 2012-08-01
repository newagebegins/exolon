define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/FlasherEntity",
  ],
  function (
    KamikazeCreatorEntity,
    FlasherEntity
  ) {
      
  var FlasherCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 0.8,
    
    createSpecificKamikaze: function (x, y) {
      return new FlasherEntity(x, y, this.behavior);
    },
    
  });
  
  return FlasherCreatorEntity;
  
});
