define(
  [
    "src/me",
    "src/util",
    "src/entities/HarbringerEntity",
  ],
  function (
    me,
    util,
    HarbringerEntity
  ) {
      
  var HarbringerCreatorEntity = Object.extend({
    
    init: function () {
      this.createTimer();
    },
    
    update: function () {
      return false;
    },
    
    createTimer: function () {
      var self = this;
      util.executeWithDelay(function () {
        self.createHarbringer();
        self.createTimer();
      }, HarbringerCreatorEntity.DELAY);
    },
    
    createHarbringer: function () {
      var vitorc = me.game.getEntityByName("vitorc")[0];
      var harbringer = new HarbringerEntity(512, vitorc.pos.y);
      me.game.add(harbringer, vitorc.z);
      me.game.sort();
    },
    
  });
  
  HarbringerCreatorEntity.DELAY = 30000;
  
  return HarbringerCreatorEntity;
  
});
