define(
  [
    "src/me",
    "src/config",
    "src/util",
  ],
  function (
    me,
    config,
    util
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
      util.setGrenades(config.initialGrenades);
    },
    
  });
  
  return GrenadePackEntity;
  
});
