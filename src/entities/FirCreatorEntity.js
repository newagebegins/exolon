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
    delay: 1.2,
    
    createSpecificKamikaze: function (x, y) {
      return new FirEntity(x, y + 8, this.behavior);
    },
    
  });
  
  return FirCreatorEntity;
  
});
