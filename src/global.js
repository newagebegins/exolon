define(["src/config"], function (config) {
  
  var global = {
    nextLevel: config.initialLevel,
    
    // READ ONLY! Use corresponding util functions to set and update.
    ammo: config.initialAmmo,
    grenades: config.initialGrenades,
    points: config.initialPoints,
    lives: config.initialLives,
    zones: config.initialZones,
    
    aliveBlasterBulletCount: 0,
    aliveGrenadesCount: 0,
    aliveMissilesCount: 0,
  };
  
  return global;
  
});
