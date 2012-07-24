define(
  [
    "src/me",
    "src/config",
  ],
  function (
    me,
    config
  ) {
      
  var AmmoPackEntity = me.CollectableEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "ammo_pack";
      this.parent(x, y, settings);
      
      this.updateColRect(2, 28, 2, 30);
    },
    
    onCollision: function (res, obj) {
      if (obj.name != "vitorc") {
        return;
      }
      this.collidable = false;
      me.game.remove(this);
      me.game.HUD.setItemValue("ammo", config.initialAmmo);
    },
    
  });
  
  return AmmoPackEntity;
  
});
