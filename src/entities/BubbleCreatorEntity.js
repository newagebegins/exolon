define(
  [
    "src/me",
    "src/util",
    "src/entities/BubbleEntity",
  ],
  function (
    me,
    util,
    BubbleEntity
  ) {
      
  var BubbleCreatorEntity = Object.extend({
    
    init: function () {
      this.createTimer();
    },
    
    update: function () {
      return false;
    },
    
    createTimer: function () {
      var self = this;
      util.executeWithDelay(function () {
        self.createBubble();
        self.createTimer();
      }, BubbleCreatorEntity.DELAY);
    },
    
    createBubble: function () {
      var vitorc = me.game.getEntityByName("vitorc")[0];
      var bubble = new BubbleEntity(512, vitorc.pos.y);
      me.game.add(bubble, vitorc.z);
      me.game.sort();
    },
    
  });
  
  BubbleCreatorEntity.DELAY = 3000;
  
  return BubbleCreatorEntity;
  
});
