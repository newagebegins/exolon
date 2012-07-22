define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
  
  var PointsHUD = me.HUD_Item.extend({
    
    init: function(x, y, val) {
      this.parent(x, y, val);
      
      this.fontGreen = new me.BitmapFont("font_green", 16);
      this.fontGreen.set("left")
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left")
    },
      
    draw: function (context, x, y) {
      this.fontGreen.draw(context, "POINTS", this.pos.x + x, this.pos.y + y);
      this.fontCyan.draw(context, util.strlpad(this.value, "0", 6), this.pos.x + x, this.pos.y + y + 16);
    },
	
  });
  
  return PointsHUD;
  
});
