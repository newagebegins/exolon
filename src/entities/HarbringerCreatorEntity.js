define(
  [
    "src/me",
    "src/entities/KamikazeCreator",
    "src/entities/HarbringerEntity",
  ],
  function (
    me,
    KamikazeCreator,
    HarbringerEntity
  ) {
      
  var HarbringerCreatorEntity = KamikazeCreator.extend({
    
    delay: 30000,
    
    createKamikaze: function () {
      var vitorc = me.game.getEntityByName("vitorc")[0];
      var harbringer = new HarbringerEntity(512, vitorc.pos.y);
      me.game.add(harbringer, vitorc.z);
      me.game.sort();
    },
    
  });
  
  return HarbringerCreatorEntity;
  
});
