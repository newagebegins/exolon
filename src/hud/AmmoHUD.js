define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
  
  var AmmoHUD = me.HUD_Item.extend({
    
    init: function(x, y) {
      this.parent(x, y);
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left")
      
      this.fontWhite = new me.BitmapFont("font_white", 16);
      this.fontWhite.set("left")
    },
      
    draw: function (context, x, y) {
      this.fontCyan.draw(context, "AMMO", this.pos.x + x, this.pos.y + y);
      this.fontWhite.draw(context, util.strlpad(this.value, "0", 2), this.pos.x + x + 16, this.pos.y + y + 16);
    },
	
  });
  
  return AmmoHUD;
  
});
