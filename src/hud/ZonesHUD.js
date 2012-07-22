define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
  
  var ZonesHUD = me.HUD_Item.extend({
    
    init: function(x, y, val) {
      this.parent(x, y, val);
      
      this.fontPurple = new me.BitmapFont("font_purple", 16);
      this.fontPurple.set("left")
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left")
    },
      
    draw: function (context, x, y) {
      this.fontPurple.draw(context, "ZONES", this.pos.x + x, this.pos.y + y);
      this.fontYellow.draw(context, util.strlpad(this.value, "0", 3), this.pos.x + x + 16, this.pos.y + y + 16);
    },
	
  });
  
  return ZonesHUD;
  
});
