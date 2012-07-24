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
    
    points: 150,
    
    init: function (x, y, settings) {
      this.parent(x, y, settings);
      this.collidable = true;
      this.isSolid = true;
      this.alive = true;
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "grenade") {
        explosion.create(this.pos.x + this.width / 2 - 8, this.pos.y + this.height / 2, 50);
        me.game.remove(this);
        this.alive = false;
        me.game.HUD.updateItemValue("points", this.points);
      }
    },
    
  });
  
  return ObstacleEntity;
  
});
