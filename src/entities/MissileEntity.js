define(
  [
    "src/me",
    "src/entities/CircularExplosionEntity",
  ],
  function (
    me,
    CircularExplosionEntity
  ) {
      
  var MissileEntity = me.ObjectEntity.extend({
    
    init: function (vitorc) {
      var settings = {};
      settings.image = "missile";
      settings.spritewidth = MissileEntity.WIDTH;
      this.parent(512, 146, settings);
      
      this.vitorc = vitorc;
      this.gravity = 0;
      this.isLethal = true;
      this.collidable = true;
      
      this.addAnimation("normal", [0]);
      this.addAnimation("fast", [1]);
      
      this.setCurrentAnimation("normal");
      this.vel.x = -MissileEntity.SPEED_X_NORMAL;
      
      me.gamestat.updateValue("aliveMissilesCount", 1);
    },
    
    update: function () {
      this.updateMovement();
      this.handleCollisions();
      return true;
    },
    
    updateMovement: function () {
      if (this.isCurrentAnimation("normal") && this.pos.x <= 280) {
        this.setCurrentAnimation("fast");
        this.vel.x = -MissileEntity.SPEED_X_FAST;
      }
      
      this.pos.x += this.vel.x;
      
      if (this.pos.y > this.vitorc.pos.y) {
        this.pos.y -= MissileEntity.SPEED_Y;
      }
      else if (this.pos.y < this.vitorc.pos.y) {
        this.pos.y += MissileEntity.SPEED_Y;
      }
      
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      var hitVitorc = res && res.obj.name == "vitorc";
      
      if (this.pos.x < 0 || hitVitorc) {
        me.game.remove(this);
      }
      
      if (hitVitorc) {
        this.createExplosion();
      }
    },
    
    explode: function () {
      me.game.remove(this);
      this.createExplosion();
    },
    
    createExplosion: function () {
      var explosion = new CircularExplosionEntity(this.pos.x, this.pos.y);
      me.game.add(explosion, this.z);
      me.game.sort.defer();
    },
    
    onDestroyEvent: function () {
      me.gamestat.updateValue("aliveMissilesCount", -1);
    },
    
  });
  
  MissileEntity.WIDTH = 32;
  MissileEntity.HEIGHT = 32;
  
  MissileEntity.SPEED_X_NORMAL = 1.5;
  MissileEntity.SPEED_X_FAST = 3;
  MissileEntity.SPEED_Y = 1;
  
  return MissileEntity;
  
});
