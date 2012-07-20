define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var PlayScreen = me.ScreenObject.extend({
    
    onResetEvent: function () {
      me.levelDirector.loadLevel("L01S01");
    },
    
  });

  return PlayScreen;
});
