define(
  [
    "src/me",
    "src/entities/HarbringerExplosionEntity",
  ],
  function (
    me,
    HarbringerExplosionEntity
  ) {
      
  var HarbringerEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "harbringer";
      settings.spritewidth = HarbringerEntity.WIDTH;
      this.parent(x, y + HarbringerEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.vel.x = -HarbringerEntity.SPEED;
      this.isLethal = true;
      this.updateColRect(0, 32, -1, 0);
    },
    
    update: function () {
      this.updateMovement();
      this.handleCollisions();
      this.parent();
      return true;
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if (this.vel.x == 0 || (res && res.obj.name == "vitorc")) {
        me.game.remove(this);
      }
    },
    
    onDestroyEvent: function () {
      this.createExplosion();
    },
    
    createExplosion: function () {
      var explosion = new HarbringerExplosionEntity(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z + 1);
      me.game.sort();
    },
    
  });
  
  HarbringerEntity.WIDTH = 128;
  HarbringerEntity.HEIGHT = 32;
  HarbringerEntity.SPEED = 3;
  
  return HarbringerEntity;
  
});
