define(
  [
    "src/me",
    "src/explosion",
  ],
  function (
    me,
    explosion
  ) {
      
  var ObstacleEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      this.parent(x, y, settings);
      this.collidable = true;
      this.isSolid = true;
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "grenade") {
        explosion.create(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
        me.game.remove(this);
        me.game.HUD.updateItemValue("points", 150);
      }
    },
    
  });
  
  return ObstacleEntity;
  
});
