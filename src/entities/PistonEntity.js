define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var PistonEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "piston";
      this.parent(x, y, settings);
      
      this.collidable = true;
      this.isLethal = true;
      
      this.pos.y += this.height;
      this.moving = false;
    },
    
    update: function () {
      me.game.collide(this);
      
      if (!this.moving) {
        this.startMove();
        return false;
      }
      
      return true;
    },
    
    startMove: function () {
      var self = this;
      this.moving = true;
      var up = new me.Tween(this.pos).to({y: this.pos.y - this.height}, 300).delay(util.getRandomInt(1000, 5000));
      var down = new me.Tween(this.pos).to({y: this.pos.y}, 300).delay(1000);
      up.chain(down);
      down.onComplete(function () {
        self.moving = false;
      });
      up.start();
    },
    
  });
  
  return PistonEntity;
  
});
