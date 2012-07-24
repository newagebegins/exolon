define(
  [
    "src/me",
    "src/entities/CircularExplosionEntity",
  ],
  function (
    me,
    CircularExplosionEntity
  ) {
      
  var KamikazeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      this.parent(x, y, settings);
      this.isLethal = true;
    },
    
    update: function () {
      this.updateMovement();
      this.handleCollisions();
      this.parent();
      return true;
    },
    
    updateMovement: function () {
      this.pos.x += this.vel.x;
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if (this.pos.x < 0 || (res && res.obj.name == "vitorc")) {
        me.game.remove(this);
      }
      
      if (res && res.obj.name == "vitorc") {
        this.createExplosion();
      }
    },
    
    createExplosion: function () {
      var explosion = new CircularExplosionEntity(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z + 1);
      me.game.sort();
    },
    
  });
  
  return KamikazeEntity;
  
});
