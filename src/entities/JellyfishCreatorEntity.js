define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/JellyfishEntity",
  ],
  function (
    KamikazeCreatorEntity,
    JellyfishEntity
  ) {
      
  var JellyfishCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 1,
    
    createSpecificKamikaze: function (x, y) {
      return new JellyfishEntity(x, y);
    },
    
  });
  
  return JellyfishCreatorEntity;
  
});
