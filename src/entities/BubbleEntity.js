define(
  [
    "src/me",
    "src/util",
    "src/entities/KamikazeEntity",
  ],
  function (
    me,
    util,
    KamikazeEntity
  ) {
      
  var BubbleEntity = KamikazeEntity.extend({
    
    init: function (x, y) {
      var settings = {};
      settings.image = "bubble";
      settings.spritewidth = BubbleEntity.WIDTH;
      settings.spriteheight = BubbleEntity.HEIGHT;
      this.parent(x, y + BubbleEntity.HEIGHT, settings);
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      this.pos.y += util.getRandomArbitrary(-32, 32);
      this.pos.x += util.getRandomArbitrary(0, 32);
    },
    
    updateMovement: function () {
      this.pos.x -= BubbleEntity.SPEED;
      this.pos.y += 3 * Math.sin(this.pos.x / 20);
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "blaster_bullet") {
        me.game.remove(this);
        this.createExplosion();
        me.game.HUD.updateItemValue("points", 150);
      }
    },
    
  });
  
  BubbleEntity.WIDTH = 32;
  BubbleEntity.HEIGHT = 32;
  BubbleEntity.SPEED = 1.7;
  
  return BubbleEntity;
  
});
