define(
  [
    "src/me",
    "src/util",
    "src/explosion",
  ],
  function (
    me,
    util,
    explosion
  ) {
      
  var BeamEntity = me.ObjectEntity.extend({
    
    points: 1000,
    hitPoints: 50,
    
    init: function (x, y, settings) {
      settings.image = "beam";
      settings.spritewidth = 16;
      this.parent(x, y, settings);
      
      this.animationspeed = 1;
      this.collidable = true;
      this.isSolid = true;
      this.isLethal = true;
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "blaster_bullet") {
        this.hitPoints--;
        
        if (this.hitPoints <= 0) {
          explosion.create(this.pos.x + this.width / 2 - 8, this.pos.y + this.height / 2, 50);
          me.game.remove(this);
          util.updatePoints(this.points);
        }
      }
    },
    
  });
  
  return BeamEntity;
  
});
