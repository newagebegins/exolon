define(
  [
    "src/me",
  ],
  function (
    me
  ) {
  
  var LivesHUD = me.HUD_Item.extend({
    
    init: function(x, y, val) {
      this.parent(x, y, val);
      
      this.fontWhite = new me.BitmapFont("font_white", 16);
      this.fontWhite.set("left");
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left");
    },
      
    draw: function (context, x, y) {
      this.fontWhite.draw(context, "LIVES", this.pos.x + x, this.pos.y + y);
      this.fontYellow.draw(context, this.value, this.pos.x + x + 32, this.pos.y + y + 16);
    },
	
  });
  
  return LivesHUD;
  
});
