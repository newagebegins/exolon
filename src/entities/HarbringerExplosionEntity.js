define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var HarbringerExplosionEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "harbringer_explosion";
      settings.spritewidth = HarbringerExplosionEntity.WIDTH;
      this.parent(x, y + HarbringerExplosionEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.setCurrentAnimation("default", function () { me.game.remove(this); });
    },
    
  });
  
  HarbringerExplosionEntity.WIDTH = 32;
  HarbringerExplosionEntity.HEIGHT = 32;
  
  return HarbringerExplosionEntity;
  
});
