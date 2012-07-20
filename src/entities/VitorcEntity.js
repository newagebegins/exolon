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
      
      this.addAnimation("move", [0,1,2,3,4,0,5,6,7,8]);
      this.setCurrentAnimation("move");
      this.animationspeed = 2;
      
      this.setVelocity(1.5, 0);
      
      this.state = "stand";
      this.updated = false;
    },
    
    update: function () {
      this.handleInput();
      
      if (this.state == "walkRight") {
        this.doWalk(false);
        this.parent();
        this.updated = true;
      }
      else if (this.state == "walkLeft") {
        this.doWalk(true);
        this.parent();
        this.updated = true;
      }
      else if (this.state == "stand") {
        this.vel.x = 0;
        this.setAnimationFrame(0);
        this.updated = true;
      }
      
      this.updateMovement();
      
      return this.updated;
    },
    
    handleInput: function () {
      if (me.input.isKeyPressed("right")) {
        this.state = "walkRight";
      }
      else if (me.input.isKeyPressed("left")) {
        this.state = "walkLeft";
      }
      else {
        this.state = "stand";
      }
    },
    
  });
  
  return VitorcEntity;
  
});
