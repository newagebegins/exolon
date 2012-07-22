define(
  [
    "src/me",
    "src/hud/AmmoHUD",
  ],
  function (
    me,
    AmmoHUD
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      me.levelDirector.loadLevel("L01S01");
      
      me.game.addHUD(0, 352, 512, 32);
      me.game.HUD.addItem("ammo", new AmmoHUD(0, 0));
    },
    
  });

  return PlayScreen;
});
