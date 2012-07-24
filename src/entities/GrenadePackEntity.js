define(
  [
    "src/me",
    "src/config",
  ],
  function (
    me,
    config
  ) {
      
  var GrenadePackEntity = me.CollectableEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "grenade_pack";
      this.parent(x, y, settings);
      
      this.updateColRect(2, 28, 2, 30);
    },
    
    onCollision: function (res, obj) {
      if (obj.name != "vitorc") {
        return;
      }
      this.collidable = false;
      me.game.remove(this);
      me.game.HUD.setItemValue("grenades", config.initialGrenades);
    },
    
  });
  
  return GrenadePackEntity;
  
});
