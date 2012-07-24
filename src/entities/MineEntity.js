define(
  [
    "src/me",
    "src/explosion",
    "src/entities/MineFireEntity",
  ],
  function (
    me,
    explosion,
    MineFireEntity
  ) {
      
  var MineEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      this.parent(x, y, settings);
      this.collidable = true;
      this.updateColRect(14, 4, -2, 1);
    },
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        explosion.create(this.pos.x + this.width / 2, this.pos.y + this.height / 2, 30);
        me.game.remove(this);
        this.createFire();
      }
    },
    
    createFire: function () {
      var fire = new MineFireEntity(this.pos.x, this.pos.y);
      me.game.add(fire, this.z);
      me.game.sort.defer();
    },
    
  });
  
  return MineEntity;
  
});
