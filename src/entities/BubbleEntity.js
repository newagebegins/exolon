define(
  [
    "src/entities/KamikazeEntity",
  ],
  function (
    KamikazeEntity
  ) {
      
  var BubbleEntity = KamikazeEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "bubble";
      settings.spritewidth = BubbleEntity.WIDTH;
      settings.spriteheight = BubbleEntity.HEIGHT;
      this.parent(x, y + BubbleEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.vel.x = -BubbleEntity.SPEED;
    },
    
  });
  
  BubbleEntity.WIDTH = 32;
  BubbleEntity.HEIGHT = 32;
  BubbleEntity.SPEED = 3;
  
  return BubbleEntity;
  
});
