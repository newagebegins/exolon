define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var GrenadeTraceEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "grenade_trace";
      settings.spritewidth = GrenadeTraceEntity.WIDTH;
      this.parent(x, y, settings);
      
      if (direction == "left") {
        this.flipX(true);
      }
      
      this.animationspeed = 0.3;
      this.setCurrentAnimation("default", function () { me.game.remove(this); });
    },
    
  });
  
  GrenadeTraceEntity.WIDTH = 64;
  
  return GrenadeTraceEntity;
  
});
