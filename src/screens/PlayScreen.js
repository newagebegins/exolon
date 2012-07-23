define(
  [
    "src/me",
    "src/config",
    "src/util",
    
    "src/hud/AmmoHUD",
    "src/hud/GrenadesHUD",
    "src/hud/PointsHUD",
    "src/hud/LivesHUD",
    "src/hud/ZonesHUD",
  ],
  function (
    me,
    config,
    util,
    
    AmmoHUD,
    GrenadesHUD,
    PointsHUD,
    LivesHUD,
    ZonesHUD
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      this.loadLevel(config.initialScreen);
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0, config.initialAmmo));
      me.game.HUD.addItem("grenades", new GrenadesHUD(80, 0, config.initialGrenades));
      me.game.HUD.addItem("points", new PointsHUD(224, 0, config.initialPoints));
      me.game.HUD.addItem("lives", new LivesHUD(336, 0, config.initialLives));
      me.game.HUD.addItem("zones", new ZonesHUD(432, 0, config.initialZones));
      
      me.gamestat.add("aliveBlasterBulletCount", 0);
      me.gamestat.add("aliveGrenadesCount", 0);
    },
    
    loadLevel: function (level) {
      me.levelDirector.loadLevel(level);
      this.addStars();
    },
    
    nextLevel: function () {
      this.loadLevel("L01S02");
      me.game.HUD.updateItemValue("zones", 1);
    },
    
    addStars: function () {
      var colors = [10, 11, 12, 13, 14];
      var layer = me.game.currentLevel.getLayerByName("Stars");
      
      var i = 0;
      while (i < PlayScreen.STARS_COUNT) {
        var x = util.getRandomInt(0, 31);
        var y = util.getRandomInt(0, 17);
        if (layer.getTileId(x, y)) {
          continue;
        }
        layer.setTile(x, y, util.arrayRandomElement(colors));
        i++;
      }
    },
    
    onDestroyEvent: function() {  
      me.game.disableHUD();
    },
    
  });
  
  PlayScreen.STARS_COUNT = 50;

  return PlayScreen;
});
