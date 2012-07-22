define(
  [
    "src/me",
    "src/config",
    
    "src/hud/AmmoHUD",
    "src/hud/GrenadesHUD",
    "src/hud/PointsHUD",
    "src/hud/LivesHUD",
    "src/hud/ZonesHUD",
  ],
  function (
    me,
    config,
    
    AmmoHUD,
    GrenadesHUD,
    PointsHUD,
    LivesHUD,
    ZonesHUD
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      me.levelDirector.loadLevel("L01S01");
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0, config.initialAmmo));
      me.game.HUD.addItem("grenades", new GrenadesHUD(80, 0, config.initialGrenades));
      me.game.HUD.addItem("points", new PointsHUD(224, 0, config.initialPoints));
      me.game.HUD.addItem("lives", new LivesHUD(336, 0, config.initialLives));
      me.game.HUD.addItem("zones", new ZonesHUD(432, 0, config.initialZones));
      
      me.gamestat.add("aliveBlasterBulletCount", 0);
      me.gamestat.add("aliveGrenadesCount", 0);
    },
    
    onDestroyEvent: function() {  
      me.game.disableHUD();
    },
    
  });

  return PlayScreen;
});
