define(
  [
    "src/me"
  ],
  function (
    me
  ) {
      
  var VitorcEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "vitorc";
      settings.spritewidth = 48;
      
      this.parent(x, y, settings);
      
      this.addAnimation("move", [0,1,2,3,4,0,5,6,7,8]);
      this.setCurrentAnimation("move");
    },
    
    update: function () {
      this.parent();
      return true;
    },
    
  });
  
  return VitorcEntity;
  
});
