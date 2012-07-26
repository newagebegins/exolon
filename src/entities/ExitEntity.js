define(
  [
    "src/me",
    "src/entities/LevelCompleteWindowEntity",
  ],
  function (
    me,
    LevelCompleteWindowEntity
  ) {
      
  var ExitEntity = me.InvisibleEntity.extend({
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        me.game.remove(obj);
        this.createLevelCompleteWindow();
      }
    },
    
    createLevelCompleteWindow: function () {
      var window = new LevelCompleteWindowEntity();
      me.game.add(window, 100);
      me.game.sort.defer();
    },
    
  });
  
  return ExitEntity;
  
});
