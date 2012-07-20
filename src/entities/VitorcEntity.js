define(
  [
    "src/me",
    "src/entities/BlasterBulletEntity",
  ],
  function (
    me,
    BlasterBulletEntity
  ) {
      
  var VitorcEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "vitorc";
      settings.spritewidth = 48;
      
      this.parent(x, y, settings);
      
      this.addAnimation("stand", [0]);
      this.addAnimation("move", [0,1,2,3,4,0,5,6,7,8]);
      this.addAnimation("jump", [3]);
      this.addAnimation("duck", [9]);
      
      this.setCurrentAnimation("stand");
      
      this.animationspeed = 2;
      
      this.setVelocity(1.5, 3);
      this.gravity = 0.1;
      
      this.canFire = true;
      this.direction = "right";
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
      this.handleFireKey();
      
      if (this.isCurrentAnimation("jump")) {
        return;
      }
      else {
        this.handleInputOnTheGround();
      }
    },
    
    handleFireKey: function () {
      if (me.input.isKeyPressed("fire")) {
        this.fire();
        this.canFire = false;
      }
      else {
        this.canFire = true;
      }
    },
    
    handleInputOnTheGround: function () {
      if (me.input.isKeyPressed("duck")) {
        this.setCurrentAnimation("duck");
        this.vel.x = 0;
        return;
      }
      
      if (me.input.isKeyPressed("right")) {
        this.direction = "right";
        this.setCurrentAnimation("move");
        this.doWalk(false);
      }
      else if (me.input.isKeyPressed("left")) {
        this.direction = "left";
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
    
    fire: function () {
      if (!this.canFire) {
        return;
      }
      var pos = this.getBlasterBulletPosition();
      var bullet = new BlasterBulletEntity(pos.x, pos.y, this.direction);
      me.game.add(bullet, this.z);
      me.game.sort();
    },
    
    getBlasterBulletPosition: function () {
      var pos = {};
      
      if (this.direction == "right") {
        pos.x = this.pos.x + this.width + VitorcEntity.BLASTER_BULLET_OFFSET_X;
      }
      else {
        pos.x = this.pos.x - BlasterBulletEntity.WIDTH - VitorcEntity.BLASTER_BULLET_OFFSET_X;
      }
      
      if (this.isCurrentAnimation("duck")) {
        pos.y = this.pos.y + VitorcEntity.BLASTER_BULLET_OFFSET_Y_DUCK;
      }
      else {
        pos.y = this.pos.y + VitorcEntity.BLASTER_BULLET_OFFSET_Y_NORMAL;
      }
      
      return pos;
    },
    
    isOnTheGround: function () {
      return !this.jumping && !this.falling;
    },
    
  });
  
  VitorcEntity.BLASTER_BULLET_OFFSET_X = 2;
  VitorcEntity.BLASTER_BULLET_OFFSET_Y_NORMAL = 30;
  VitorcEntity.BLASTER_BULLET_OFFSET_Y_DUCK = VitorcEntity.BLASTER_BULLET_OFFSET_Y_NORMAL + 10;
  
  return VitorcEntity;
  
});
