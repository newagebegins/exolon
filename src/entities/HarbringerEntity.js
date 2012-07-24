define(
  [
    "src/entities/KamikazeEntity",
  ],
  function (
    KamikazeEntity
  ) {
      
  var HarbringerEntity = KamikazeEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "harbringer";
      settings.spritewidth = HarbringerEntity.WIDTH;
      this.parent(x, y + HarbringerEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.vel.x = -HarbringerEntity.SPEED;
      this.updateColRect(0, 32, -1, 0);
    },
    
  });
  
  HarbringerEntity.WIDTH = 128;
  HarbringerEntity.HEIGHT = 32;
  HarbringerEntity.SPEED = 3;
  
  return HarbringerEntity;
  
});
