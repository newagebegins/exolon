define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
  
  var GrenadesHUD = me.HUD_Item.extend({
    
    init: function(x, y, val) {
      this.parent(x, y, val);
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left")
      
      this.fontPurple = new me.BitmapFont("font_purple", 16);
      this.fontPurple.set("left")
    },
      
    draw: function (context, x, y) {
      this.fontYellow.draw(context, "GRENADES", this.pos.x + x, this.pos.y + y);
      this.fontPurple.draw(context, util.strlpad(this.value, "0", 2), this.pos.x + x + 48, this.pos.y + y + 16);
    },
	
  });
  
  return GrenadesHUD;
  
});
