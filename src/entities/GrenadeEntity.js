define(
  [
    "src/me",
    "src/global",
  ],
  function (
    me,
    global
  ) {
      
  var GrenadeEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "grenade";
      this.parent(x, y, settings);
      
      this.name = "grenade";
      
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
      this.updateVelocityAndGravity();
      this.updateMovement();
      this.handleCollisions();
      return true;
    },
    
    updateVelocityAndGravity: function () {
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
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if ((res && res.obj.name != "vitorc" && res.obj.isSolid) || this.vel.x == 0 || this.vel.y == 0) {
        me.game.remove(this);
      }
    },
    
    onDestroyEvent: function () {
      global.aliveGrenadesCount--;
    },
    
  });
  
  GrenadeEntity.WIDTH = 16;
  
  GrenadeEntity.VEL_Y = 3.3;
  GrenadeEntity.UP_VEL_X = 1.5;
  GrenadeEntity.UP_GRAVITY = 0.2;
  GrenadeEntity.DOWN_VEL_X = 5.5;
  GrenadeEntity.DOWN_GRAVITY = 0.1;
  
  return GrenadeEntity;
  
});
