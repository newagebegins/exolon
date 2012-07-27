define(
  [
    "src/me",
    "src/explosion",
    "src/entities/AwardPointsEntity",
  ],
  function (
    me,
    explosion,
    AwardPointsEntity
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
          
          var award = new AwardPointsEntity(this.points);
          me.game.add(award, 999);
          me.game.sort.defer();
        }
      }
    },
    
  });
  
  return BeamEntity;
  
});
