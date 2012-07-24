define(
  [
    "src/me",
    "src/entities/CircularExplosionEntity",
  ],
  function (
    me,
    CircularExplosionEntity
  ) {
      
  var BubbleEntity = me.ObjectEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "bubble";
      settings.spritewidth = BubbleEntity.WIDTH;
      settings.spriteheight = BubbleEntity.HEIGHT;
      this.parent(x, y + BubbleEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.vel.x = -BubbleEntity.SPEED;
      this.isLethal = true;
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
      var explosion = new CircularExplosionEntity(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z + 1);
      me.game.sort();
    },
    
  });
  
  BubbleEntity.WIDTH = 32;
  BubbleEntity.HEIGHT = 32;
  BubbleEntity.SPEED = 3;
  
  return BubbleEntity;
  
});
