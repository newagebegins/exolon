define(
  [
    "src/me",
    "src/entities/BlasterBulletEntity",
    "src/entities/GrenadeEntity",
    "src/entities/GrenadeTraceEntity",
  ],
  function (
    me,
    BlasterBulletEntity,
    GrenadeEntity,
    GrenadeTraceEntity
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
      
      this.setVelocity(1.5, 2.75);
      this.gravity = 0.1;
      
      this.firePressed = false;
      this.grenadeFireDuration = 35;
      this.grenadeFireTimer = 0;
      
      this.direction = "right";
    },
    
    update: function () {
      if (this.isCurrentAnimation("jump") && this.isOnTheGround()) {
        this.setCurrentAnimation("stand");
      }
      
      this.handleInput();
      this.updateMovement();
      this.handleCollisions();
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
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      if (res) {
        this.pos.sub(res);
        
        if (this.isOnTheGround()) {
          this.setCurrentAnimation("stand");
        }
      }
    },
    
    handleFireKey: function () {
      if (me.input.isKeyPressed("fire")) {
        this.fireBlaster();
        this.fireGrenade();
        this.firePressed = true;
        this.grenadeFireTimer++;
      }
      else {
        this.firePressed = false;
        this.grenadeFireTimer = 0;
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
    
    fireBlaster: function () {
      if (!this.canFireBlaster()) {
        return;
      }
      var pos = this.getBlasterBulletPosition();
      var bullet = new BlasterBulletEntity(pos.x, pos.y, this.direction);
      me.game.add(bullet, this.z);
      me.game.sort();
      
      me.gamestat.updateValue("aliveBlasterBulletCount", 1);
      
      if (me.game.HUD.getItemValue("ammo") > 0) {
        me.game.HUD.updateItemValue("ammo", -1);
      }
    },
    
    fireGrenade: function () {
      if (!this.canFireGrenade()) {
        return;
      }
      var grenadePos = this.getGrenadePosition();
      var grenade = new GrenadeEntity(grenadePos.x, grenadePos.y, this.direction);
      me.game.add(grenade, this.z);
      
      var tracePos = this.getGrenadeTracePosition();
      var trace = new GrenadeTraceEntity(tracePos.x, tracePos.y, this.direction);
      me.game.add(trace, this.z);
      
      me.game.sort();
      
      me.gamestat.updateValue("aliveGrenadesCount", 1);
      
      if (me.game.HUD.getItemValue("grenades") > 0) {
        me.game.HUD.updateItemValue("grenades", -1);
      }
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
        pos.y = this.pos.y + VitorcEntity.BLASTER_BULLET_OFFSET_Y + VitorcEntity.DUCK_OFFSET;
      }
      else {
        pos.y = this.pos.y + VitorcEntity.BLASTER_BULLET_OFFSET_Y;
      }
      
      return pos;
    },
    
    getGrenadePosition: function () {
      var pos = {};
      
      if (this.direction == "right") {
        pos.x = this.pos.x + VitorcEntity.GRENADE_OFFSET_X;
      }
      else {
        pos.x = this.pos.x + this.width - GrenadeEntity.WIDTH - VitorcEntity.GRENADE_OFFSET_X;
      }
      
      if (this.isCurrentAnimation("duck")) {
        pos.y = this.pos.y + VitorcEntity.GRENADE_OFFSET_Y + VitorcEntity.DUCK_OFFSET;
      }
      else {
        pos.y = this.pos.y + VitorcEntity.GRENADE_OFFSET_Y;
      }
      
      return pos;
    },
    
    getGrenadeTracePosition: function () {
      var pos = {};
      
      if (this.direction == "right") {
        pos.x = this.pos.x + VitorcEntity.GRENADE_TRACE_OFFSET_X;
      }
      else {
        pos.x = this.pos.x + this.width - GrenadeTraceEntity.WIDTH - VitorcEntity.GRENADE_TRACE_OFFSET_X;
      }
      
      if (this.isCurrentAnimation("duck")) {
        pos.y = this.pos.y + VitorcEntity.GRENADE_TRACE_OFFSET_Y + VitorcEntity.DUCK_OFFSET;
      }
      else {
        pos.y = this.pos.y + VitorcEntity.GRENADE_TRACE_OFFSET_Y;
      }
      
      return pos;
    },
    
    isOnTheGround: function () {
      return !this.jumping && !this.falling;
    },
    
    canFireBlaster: function () {
      if (this.firePressed || me.game.HUD.getItemValue("ammo") == 0) {
        return false;
      }
      return true;
    },
    
    canFireGrenade: function () {
      if (me.gamestat.getItemValue("aliveBlasterBulletCount") > 0) {
        return false;
      }
      if (me.gamestat.getItemValue("aliveGrenadesCount") > 0) {
        return false;
      }
      if (this.grenadeFireTimer < this.grenadeFireDuration) {
        return false;
      }
      if (me.game.HUD.getItemValue("grenades") == 0) {
        return false;
      }
      return true;
    },
    
  });
  
  VitorcEntity.DUCK_OFFSET = 10;
  
  VitorcEntity.BLASTER_BULLET_OFFSET_X = 2;
  VitorcEntity.BLASTER_BULLET_OFFSET_Y = 30;
  
  VitorcEntity.GRENADE_OFFSET_X = 20;
  VitorcEntity.GRENADE_OFFSET_Y = 7;
  
  VitorcEntity.GRENADE_TRACE_OFFSET_X = 4;
  VitorcEntity.GRENADE_TRACE_OFFSET_Y = 5;
  
  return VitorcEntity;
  
});
