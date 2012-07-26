define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var LevelCompleteWindowEntity = Object.extend({
    
    init: function () {
      this.visible = true;
      
      this.bgImg = me.loader.getImage("level_complete_window");
      
      this.fontPurple = new me.BitmapFont("font_purple", 16);
      this.fontPurple.set("left");
      
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
      
    },
    
    draw: function (context) {
      context.drawImage(this.bgImg, 112, 48);
      this.fontPurple.draw(context, "BRAVERY BONUS", 160, 96);
      this.fontWhite.draw(context, "10000", 224, 128);
      this.fontGreen.draw(context, "LIVES BONUS", 176, 160);
      this.fontYellow.draw(context, "7 X 1000", 208, 192);
      this.fontCyan.draw(context, "PRESS FIRE TO", 160, 224);
      this.fontCyan.draw(context, "RESUME PLAY", 176, 256);
    },
    
  });
  
  return LevelCompleteWindowEntity;
  
});
