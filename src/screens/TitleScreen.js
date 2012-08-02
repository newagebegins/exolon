define(
  [
    "src/me",
    "src/screens",
  ],
  function (
    me,
    screens
  ) {
      
  var TitleScreen = me.ScreenObject.extend({
    
    init: function () {
      this.parent(true);
      
      this.titleImg = me.loader.getImage("title");
      
      this.fontGreen = new me.BitmapFont("font_green", 16);
      this.fontGreen.set("left");
      
      this.fontRed = new me.BitmapFont("font_red", 16);
      this.fontRed.set("left");
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left");
    },
    
    onResetEvent: function () {
      me.audio.play("theme");
    },
    
    onDestroyEvent: function () {
      me.audio.stop("theme");
    },
    
    update: function () {
      if (me.input.isKeyPressed('fire')) {
        me.state.change(screens.PLAY);
      }
      return true;
    },
    
    draw: function (context) {
      me.video.clearSurface(context, "black");
      context.drawImage(this.titleImg, 128,0);
      this.fontGreen.draw(context, "BY  RAFFAELE CECCO", 112, 112);
      this.fontCyan.draw(context, "PRESS FIRE TO PLAY", 112, 112 + 16 * 3);
      this.fontRed.draw(context, "EXOLON COPYRIGHT 1987 HEWSON", 32, 368);
    },
    
  });
  
  return TitleScreen;
});
