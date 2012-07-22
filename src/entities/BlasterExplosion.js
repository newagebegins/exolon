define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var BlasterExplosion = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "blaster_explosion";
      settings.spritewidth = 16;
      
      this.parent(x, y, settings);
      
      this.addAnimation("default", [0,1,2,3,2,1,2]);
      this.setCurrentAnimation("default", function () { me.game.remove(this); });
      this.animationspeed = 1;
    },
    
  });
  
  return BlasterExplosion;
  
});
