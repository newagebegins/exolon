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
    
    createSpecificKamikaze: function (x, y) {
      return new LouseEntity(x, y);
    },
    
  });
  
  return LouseCreatorEntity;
  
});
