define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var MineFireEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "mine_fire";
      settings.spritewidth = 32;
      settings.spriteheight = 16;
      this.parent(x, y + settings.spriteheight, settings);
      
      this.fireColor = 0;
      this.fireSize = 0;
    },
    
    update: function () {
      this.updateAnimation();
      return true;
    },
    
    updateAnimation: function () {
      this.fireSize++;
      if (this.fireSize > 1) {
        this.fireSize = 0;
      }
      this.fireColor = util.getRandomInt(0, 3);
      this.setAnimationFrame(this.fireColor * 3 + this.fireSize);
    },
    
  });
  
  return MineFireEntity;
  
});
