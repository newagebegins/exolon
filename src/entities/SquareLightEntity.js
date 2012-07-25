define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var SquareLightEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "square_light";
      settings.spritewidth = 16;
      this.parent(x, y, settings);
      
      this.animationspeed = 1;
    },
    
  });
  
  return SquareLightEntity;
  
});
