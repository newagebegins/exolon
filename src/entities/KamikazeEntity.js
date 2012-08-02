define(
  [
    "src/me",
    "src/util",
    "src/entities/CircularExplosionEntity",
  ],
  function (
    me,
    util,
    CircularExplosionEntity
  ) {
      
  var KamikazeEntity = me.ObjectEntity.extend({
    
    points: 0,
    
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
      var hitVitorc = res && res.obj.name == "vitorc";
      
      if (this.pos.x < 0 || hitVitorc) {
        me.game.remove(this);
      }
      
      if (hitVitorc) {
        this.createExplosion();
        util.updatePoints(this.points);
      }
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "blaster_bullet" || obj.name == "vitorc") {
        me.game.remove(this);
        this.createExplosion();
        util.updatePoints(this.points);
      }
    },
    
    createExplosion: function () {
      var explosion = this.createSpecificExplosion(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z + 1);
      me.game.sort.defer();
      
      me.audio.play("burst");
    },
    
    createSpecificExplosion: function (x, y) {
      return new CircularExplosionEntity(x, y);
    },
    
  });
  
  return KamikazeEntity;
  
});
