define(
  [
    "src/me",
  ],
  function (
    me
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
    },
    
    update: function () {
      return true;
    },
    
    draw: function (context) {
      me.video.clearSurface(context, "black");
      context.drawImage(this.bgImg, 0, 0);
      context.drawImage(this.titleImg, 128, 48);
//      this.fontGreen.draw(context, "BY  RAFFAELE CECCO", 112, 112);
    },
    
  });
  
  return BonusScreen;
});
