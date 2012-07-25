define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var DischargeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "discharge";
      settings.spritewidth = 64;
      settings.spriteheight = 32;
      this.parent(x, y, settings);
      
      this.animationspeed = 1;
    },
    
    update: function () {
      this.setAnimationFrame(util.getRandomInt(0, 39));
      return true;
    },
    
  });
  
  return DischargeEntity;
  
});
