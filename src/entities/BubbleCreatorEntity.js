define(
  [
    "src/me",
    "src/entities/KamikazeCreator",
    "src/entities/BubbleEntity",
  ],
  function (
    me,
    KamikazeCreator,
    BubbleEntity
  ) {
      
  var BubbleCreatorEntity = KamikazeCreator.extend({
    
    delay: 3000,
    
    createKamikaze: function () {
      var vitorc = me.game.getEntityByName("vitorc")[0];
      var bubble = new BubbleEntity(512, vitorc.pos.y);
      me.game.add(bubble, vitorc.z);
      me.game.sort();
    },
    
  });
  
  return BubbleCreatorEntity;
  
});
