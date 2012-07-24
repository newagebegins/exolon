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
    },
    
    updateMovement: function () {
      this.pos.x -= BubbleEntity.SPEED;
      this.pos.y += 3 * Math.sin(this.pos.x / 20);
    },
    
  });
  
  BubbleEntity.WIDTH = 32;
  BubbleEntity.HEIGHT = 32;
  BubbleEntity.SPEED = 2;
  
  return BubbleEntity;
  
});
