define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var KamikazeCreatorEntity = Object.extend({
    
    delay: 5000,
    
    init: function () {
      this.createTimer();
    },
    
    update: function () {
      return false;
    },
    
    createTimer: function () {
      var self = this;
      util.executeWithDelay(function () {
        self.createKamikaze();
        self.createTimer();
      }, this.delay);
    },
    
    createKamikaze: function () {
      var vitorc = me.game.getEntityByName("vitorc")[0];
      var harbringer = this.createSpecificKamikaze(512, vitorc.pos.y);
      me.game.add(harbringer, vitorc.z - 1);
      me.game.sort.defer();
    },
    
    createSpecificKamikaze: function () {
      // should be overriden by subclasses
    },
    
  });
  
  return KamikazeCreatorEntity;
  
});
