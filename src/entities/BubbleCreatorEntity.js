define(
  [
    "src/entities/KamikazeCreatorEntity",
    "src/entities/BubbleEntity",
  ],
  function (
    KamikazeCreatorEntity,
    BubbleEntity
  ) {
      
  var BubbleCreatorEntity = KamikazeCreatorEntity.extend({
    
    // in sec
    delay: 1,
    
    createSpecificKamikaze: function (x, y) {
      return new BubbleEntity(x, y);
    },
    
    shouldCreate: function () {
      if (this.vitorc.pos.x > 360) {
        return false;
      }
      return true;
    },
    
  });
  
  return BubbleCreatorEntity;
  
});
