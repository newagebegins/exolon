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
    },
    
    update: function () {
      
    },
    
    draw: function (context) {
      context.drawImage(this.bgImg, 112, 48);
    },
    
  });
  
  return LevelCompleteWindowEntity;
  
});
