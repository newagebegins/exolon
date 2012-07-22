define(
  [
    "src/me"
  ],
  function (
    me
  ) {
      
  var GrenadeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "grenade";
      this.parent(x, y, settings);
      
      this.direction = direction;
      
      if (this.direction == "left") {
        this.flipX(true);
      }
      
      this.setVelocity(GrenadeEntity.DOWN_VEL_X, GrenadeEntity.VEL_Y);
      this.forceJump();
      
      this.horizontalFlyTimer = 0;
      this.horizontalFlyDuration = 30;
    },
    
    update: function () {
      if (this.falling) {
        this.horizontalFlyTimer++;
        if (this.horizontalFlyTimer > this.horizontalFlyDuration) {
          this.vel.x = this.direction == "right" ? GrenadeEntity.DOWN_VEL_X : -GrenadeEntity.DOWN_VEL_X;
          this.gravity = GrenadeEntity.DOWN_GRAVITY;
        }
        else {
          this.vel.x = this.direction == "right" ? GrenadeEntity.UP_VEL_X : -GrenadeEntity.UP_VEL_X;
          this.gravity = 0;
        }
      }
      else {
        this.gravity = GrenadeEntity.UP_GRAVITY;
        this.vel.x = this.direction == "right" ? GrenadeEntity.UP_VEL_X : -GrenadeEntity.UP_VEL_X;
      }
      
      this.updateMovement();
      
      
      if (this.vel.x == 0 || this.vel.y == 0) {
        me.game.remove(this);
      }
      
      return true;
    },
    
  });
  
  GrenadeEntity.WIDTH = 16;
  
  GrenadeEntity.VEL_Y = 3.6;
  GrenadeEntity.UP_VEL_X = 1.3;
  GrenadeEntity.UP_GRAVITY = 0.2;
  GrenadeEntity.DOWN_VEL_X = 5.5;
  GrenadeEntity.DOWN_GRAVITY = 0.1;
  
  return GrenadeEntity;
  
});
