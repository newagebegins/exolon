define(
  [
    "src/me",
    "src/config",
    "src/hud/AmmoHUD",
  ],
  function (
    me,
    config,
    AmmoHUD
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      me.levelDirector.loadLevel("L01S01");
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0, config.initialAmmo));
    },
    
  });

  return PlayScreen;
});
