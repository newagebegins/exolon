define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var ShipFireEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "ship_fire";
      settings.spritewidth = 16;
      settings.spriteheight = 32;
      this.parent(x, y, settings);
      
      this.fireColor = 0;
      this.fireSize = 0;
      this.animationTimer = 0;
      this.animationspeed = 1;
    },
    
    update: function () {
      this.animationTimer++;
      if (this.animationTimer > this.animationspeed) {
        this.animationTimer = 0;
        this.updateAnimation();
        return true;
      }
      
      return false;
    },
    
    updateAnimation: function () {
      this.fireSize++;
      if (this.fireSize > 2) {
        this.fireSize = 0;
      }
      this.fireColor = util.getRandomInt(0, 3);
      this.setAnimationFrame(this.fireColor * 3 + this.fireSize);
    },
    
  });
  
  return ShipFireEntity;
  
});
