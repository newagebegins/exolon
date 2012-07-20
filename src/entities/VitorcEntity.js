define(
  [
    "src/me"
  ],
  function (
    me
  ) {
      
  var VitorcEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "vitorc";
      settings.spritewidth = 48;
      
      this.parent(x, y, settings);
      
      this.addAnimation("stand", [0]);
      this.addAnimation("move", [0,1,2,3,4,0,5,6,7,8]);
      this.addAnimation("jump", [3]);
      
      this.setCurrentAnimation("stand");
      
      this.animationspeed = 2;
      
      this.setVelocity(1.5, 3);
      this.gravity = 0.1;
    },
    
    update: function () {
      this.handleInput();
      this.updateMovement();
      
      if (this.isCurrentAnimation("jump") && this.isOnTheGround()) {
        this.setCurrentAnimation("stand");
      }
      
      this.parent();
      return true;
    },
    
    handleInput: function () {
      if (this.isCurrentAnimation("jump")) {
        return;
      }
      
      if (me.input.isKeyPressed("right")) {
        this.setCurrentAnimation("move");
        this.doWalk(false);
      }
      else if (me.input.isKeyPressed("left")) {
        this.setCurrentAnimation("move");
        this.doWalk(true);
      }
      
      if (me.input.isKeyPressed("jump")) {
        this.setCurrentAnimation("jump");
        this.doJump();
      }
      
      if (!me.input.isKeyPressed("right") &&
          !me.input.isKeyPressed("left") &&
          !me.input.isKeyPressed("jump")
      ) {
        this.setCurrentAnimation("stand");
        this.vel.x = 0;
      }
    },
    
    isOnTheGround: function () {
      return !this.jumping && !this.falling;
    },
    
  });
  
  return VitorcEntity;
  
});
