define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/FirEntity",
  ],
  function (
    KamikazeCreatorEntity,
    FirEntity
  ) {
      
  var FirCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 0.8,
    
    createSpecificKamikaze: function (x, y) {
      return new FirEntity(x, y, this.behavior);
    },
    
  });
  
  return FirCreatorEntity;
  
});
