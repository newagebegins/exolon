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
    
    shouldCreate: function () {
      if (this.vitorc.pos.x > 350) {
        return false;
      }
      return true;
    },
    
  });
  
  return JellyfishCreatorEntity;
  
});
