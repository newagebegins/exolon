define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var BonusScreen = me.ScreenObject.extend({
    
    init: function () {
      this.parent(true);
      
      this.bgImg = me.loader.getImage("bonus_screen");
      this.titleImg = me.loader.getImage("title");
      
      this.fontWhite = new me.BitmapFont("font_white", 16);
      this.fontWhite.set("left");
      
      this.fontGreen = new me.BitmapFont("font_green", 16);
      this.fontGreen.set("left");
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left");
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left");
      
      this.points = [0, 1000, 0, 3000, 0, 5000, 0, 7000];
    },
    
    update: function () {
      return true;
    },
    
    draw: function (context) {
      me.video.clearSurface(context, "black");
      context.drawImage(this.bgImg, 0, 0);
      context.drawImage(this.titleImg, 128, 48);
      this.fontWhite.draw(context, "EXOLON BONUS SCREEN!", 96, 128);
      this.fontGreen.draw(context, "PRESS FIRE TO STOP POINTER", 48, 160);
      this.drawPoints(context);
    },
    
    drawPoints: function (context) {
      var font = this.fontCyan;
      
      for (var i in this.points) {
        font = font === this.fontCyan ? this.fontYellow : this.fontCyan;
        
        var str = util.strlpad(this.points[i], "0", 5);
        str += " POINTS";
        
        font.draw(context, str, 144, 208 + i * 16);
      }
    },
    
  });
  
  return BonusScreen;
});
