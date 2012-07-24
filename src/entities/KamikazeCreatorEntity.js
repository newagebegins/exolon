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
      this.vitorc = me.game.getEntityByName("vitorc")[0];
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
      if (!this.shouldCreate()) {
        return;
      }
      var kamikaze = this.createSpecificKamikaze(512, this.vitorc.pos.y);
      me.game.add(kamikaze, this.vitorc.z);
      me.game.sort.defer();
    },
    
    createSpecificKamikaze: function () {
      // should be overriden by subclasses
    },
    
    shouldCreate: function () {
      // should be overriden by subclasses
      return true;
    },
    
  });
  
  return KamikazeCreatorEntity;
  
});
