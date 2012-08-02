define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var CircularExplosionEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "circular_explosion";
      settings.spritewidth = CircularExplosionEntity.WIDTH;
      this.parent(x, y + CircularExplosionEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.setCurrentAnimation("default", function () { me.game.remove(this); });
      
      me.audio.play("explosion3");
    },
    
  });
  
  CircularExplosionEntity.WIDTH = 32;
  CircularExplosionEntity.HEIGHT = 32;
  
  return CircularExplosionEntity;
  
});
