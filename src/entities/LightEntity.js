define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var LightEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "light";
      settings.spritewidth = 16;
      settings.spriteheight = 16;
      this.parent(x, y, settings);
      
      this.animationspeed = 1;
      
      this.addAnimation("floor", [0,1,2,3,4,5,6,7]);
      this.addAnimation("ceiling", [8,9,10,11,12,13,14,15]);
      this.setCurrentAnimation(settings.placement);
    },
    
  });
  
  return LightEntity;
  
});
