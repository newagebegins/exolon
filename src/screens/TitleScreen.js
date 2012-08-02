define(
  [
    "src/me",
    "src/util",
    "src/screens",
    "src/entities/StarEntity",
  ],
  function (
    me,
    util,
    screens,
    StarEntity
  ) {
      
  var THEME_SONG_LENGTH_MS = 41000;
  var STARS_NUM = 10;
      
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
      
      this.fontPurple = new me.BitmapFont("font_purple", 16);
      this.fontPurple.set("left");
    },
    
    onResetEvent: function () {
      this.stars = [];
      util.executeWithDelay(this.createStars.bind(this), THEME_SONG_LENGTH_MS);
      me.audio.playTrack("theme", false);
    },
    
    onDestroyEvent: function () {
      me.audio.stopTrack("theme");
    },
    
    update: function () {
      if (me.input.isKeyPressed('fire')) {
        me.state.change(screens.PLAY);
      }
      
      for (var i in this.stars) {
        this.stars[i].update();
      }
      
      return true;
    },
    
    draw: function (context) {
      me.video.clearSurface(context, "black");
      
      for (var i in this.stars) {
        this.stars[i].draw(context);
      }
      
      context.drawImage(this.titleImg, 128,0);
      this.fontGreen.draw(context, "BY  RAFFAELE CECCO", 112, 112);
      this.fontCyan.draw(context, "PRESS      TO PLAY", 112, 112 + 16 * 6);
      this.fontPurple.draw(context, "      FIRE        ", 112, 112 + 16 * 6);
      this.fontRed.draw(context, "EXOLON COPYRIGHT 1987 HEWSON", 32, 368);
    },
    
    createStars: function () {
      for (var i = 0; i < STARS_NUM; ++i) {
        var star = new StarEntity();
        this.stars.push(star);
      }
    },
    
  });
  
  return TitleScreen;
});
