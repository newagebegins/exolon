define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/HarbringerEntity",
  ],
  function (
    KamikazeCreatorEntity,
    HarbringerEntity
  ) {
      
  var HarbringerCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 40,
    
    createSpecificKamikaze: function (x, y) {
      return new HarbringerEntity(x, y);
    },
    
  });
  
  return HarbringerCreatorEntity;
  
});
