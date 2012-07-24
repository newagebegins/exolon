define(
  [
    "src/me",
    "src/explosion",
  ],
  function (
    me,
    explosion
  ) {
      
  var MineEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      this.parent(x, y, settings);
      this.collidable = true;
      this.updateColRect(14, 4, -2, 1);
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        explosion.create(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
        me.game.remove(this);
      }
    },
    
  });
  
  return MineEntity;
  
});
