define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var GameOverWindow = Object.extend({
    
    init: function () {
      this.visible = true;
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left");
    },
    
    update: function () {
      return true;
    },
    
    draw: function (context) {
      context.fillStyle = "#ef0000";
      context.fillRect(160, 144, 176, 48);
      
      this.fontYellow.draw(context, "GAME OVER", 176, 160);
    },
    
  });
  
  return GameOverWindow;
  
});
