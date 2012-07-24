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
    
    delay: 1000,
    
    createSpecificKamikaze: function (x, y) {
      return new BubbleEntity(x, y - 8);
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
