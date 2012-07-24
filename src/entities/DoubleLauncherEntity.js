define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var DoubleLauncherEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "double_launcher";
      this.parent(x, y, settings);
    },
    
  });
  
  return DoubleLauncherEntity;
  
});
