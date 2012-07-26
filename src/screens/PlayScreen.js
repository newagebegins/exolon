define(
  [
    "src/me",
    "src/config",
    "src/global",
    "src/util",
    "src/screens",
    
    "src/hud/AmmoHUD",
    "src/hud/GrenadesHUD",
    "src/hud/PointsHUD",
    "src/hud/LivesHUD",
    "src/hud/ZonesHUD",
    
    "src/entities/HarbringerCreatorEntity",
    "src/entities/GameOverWindow",
  ],
  function (
    me,
    config,
    global,
    util,
    screens,
    
    AmmoHUD,
    GrenadesHUD,
    PointsHUD,
    LivesHUD,
    ZonesHUD,
    
    HarbringerCreatorEntity,
    GameOverWindow
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      this.loadLevel(global.nextLevel);
      
      var vitorc = me.game.getEntityByName("vitorc")[0];
      this.setVitorcRespawnPosition(vitorc);
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0, global.ammo));
      me.game.HUD.addItem("grenades", new GrenadesHUD(80, 0, global.grenades));
      me.game.HUD.addItem("points", new PointsHUD(224, 0, global.points));
      me.game.HUD.addItem("lives", new LivesHUD(336, 0, global.lives));
      me.game.HUD.addItem("zones", new ZonesHUD(432, 0, global.zones));
    },
    
    loadLevel: function (level) {
      me.levelDirector.loadLevel(level);
      global.nextLevel = me.game.currentLevel.nextLevel;
      this.addStars();
      this.addHarbringerCreator();
    },
    
    nextLevel: function () {
      var prevLevelVitorc = me.game.getEntityByName("vitorc")[0];
      this.loadLevel(me.game.currentLevel.nextLevel);
      
      var vitorc = me.game.getEntityByName("vitorc")[0];
      this.restoreVitorcProperties(vitorc, prevLevelVitorc);
      this.setVitorcRespawnPosition(vitorc);
      
      util.updateZones(1);
    },
    
    gameOver: function () {
      var window = new GameOverWindow();
      me.game.add(window, 10);
      me.game.sort();
      
      me.state.pause();
      
      global.nextLevel = config.initialLevel;
      
      global.ammo = config.initialAmmo;
      global.grenades = config.initialGrenades;
      global.points = config.initialPoints;
      global.lives = config.initialLives;
      global.zones = config.initialZones;
      
      global.aliveBlasterBulletCount = 0;
      global.aliveGrenadesCount = 0;
      global.aliveMissilesCount = 0;
      
      setTimeout(function () { me.state.change(screens.TITLE); }, 3000);
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
