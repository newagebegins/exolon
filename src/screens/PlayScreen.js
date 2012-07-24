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
    
    "src/entities/HarbringerCreatorEntity",
  ],
  function (
    me,
    config,
    util,
    
    AmmoHUD,
    GrenadesHUD,
    PointsHUD,
    LivesHUD,
    ZonesHUD,
    
    HarbringerCreatorEntity
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      this.loadLevel(config.initialScreen);
      
      var vitorc = me.game.getEntityByName("vitorc")[0];
      this.setVitorcRespawnPosition(vitorc);
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0, config.initialAmmo));
      me.game.HUD.addItem("grenades", new GrenadesHUD(80, 0, config.initialGrenades));
      me.game.HUD.addItem("points", new PointsHUD(224, 0, config.initialPoints));
      me.game.HUD.addItem("lives", new LivesHUD(336, 0, config.initialLives));
      me.game.HUD.addItem("zones", new ZonesHUD(432, 0, config.initialZones));
      
      me.gamestat.add("aliveBlasterBulletCount", 0);
      me.gamestat.add("aliveGrenadesCount", 0);
      me.gamestat.add("aliveMissilesCount", 0);
    },
    
    loadLevel: function (level) {
      me.levelDirector.loadLevel(level);
      this.addStars();
      this.addHarbringerCreator();
    },
    
    nextLevel: function () {
      var prevLevelVitorc = me.game.getEntityByName("vitorc")[0];
      this.loadLevel(me.game.currentLevel.nextLevel);
      
      var vitorc = me.game.getEntityByName("vitorc")[0];
      this.restoreVitorcProperties(vitorc, prevLevelVitorc);
      this.setVitorcRespawnPosition(vitorc);
      
      me.game.HUD.updateItemValue("zones", 1);
    },
    
    restoreVitorcProperties: function (vitorc, prevLevelVitorc) {
      vitorc.pos.y = prevLevelVitorc.pos.y;
      vitorc.vel.x = prevLevelVitorc.vel.x;
      vitorc.vel.y = prevLevelVitorc.vel.y;
      vitorc.setCurrentAnimation(prevLevelVitorc.current.name);
      vitorc.falling = prevLevelVitorc.falling;
      vitorc.jumping = prevLevelVitorc.jumping;
    },
    
    setVitorcRespawnPosition: function (vitorc) {
      var x = vitorc.pos.x;
      var y = vitorc.pos.y;
      
      // find nearest ground tile
      while (!me.game.collisionMap.getTile(x, y + vitorc.height)) {
        y++;
      }
      
      vitorc.respawn.x = x;
      vitorc.respawn.y = y;
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
    
    addHarbringerCreator: function () {
      var creator = new HarbringerCreatorEntity();
      me.game.add(creator, 999);
      me.game.sort.defer();
    },
    
    onDestroyEvent: function() {  
      me.game.disableHUD();
    },
    
  });
  
  PlayScreen.STARS_COUNT = 50;

  return PlayScreen;
});
