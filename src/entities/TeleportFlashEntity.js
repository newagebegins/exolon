define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var TeleportFlashEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "teleport_flash";
      settings.spritewidth = TeleportFlashEntity.WIDTH;
      this.parent(x, y + TeleportFlashEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.setCurrentAnimation("default", function () { me.game.remove(this); });
    },
    
  });
  
  TeleportFlashEntity.WIDTH = 32;
  TeleportFlashEntity.HEIGHT = 48;
  
  return TeleportFlashEntity;
  
});
