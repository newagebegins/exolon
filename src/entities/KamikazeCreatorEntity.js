define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var KamikazeCreatorEntity = Object.extend({
    
    // in sec
    delay: 5,
    
    init: function () {
      this.vitorc = me.game.getEntityByName("vitorc")[0];
      this.timer = 0;
    },
    
    update: function () {
      this.timer +=  me.timer.tick / me.sys.fps;
      if (this.timer > this.delay) {
        this.timer = 0;
        this.createKamikaze();
      }
      return false;
    },
    
    createKamikaze: function () {
      if (this.vitorc.isCurrentAnimation("die") || !this.shouldCreate()) {
        return;
      }
      var kamikaze = this.createSpecificKamikaze(512, this.vitorc.pos.y + 2);
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
