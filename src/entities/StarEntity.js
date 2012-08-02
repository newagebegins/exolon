define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var StarEntity = me.ObjectEntity.extend({
    
    init: function () {
      var self = this;
      
      var settings = {};
      settings.image = "star";
      settings.spritewidth = StarEntity.WIDTH;
      
      var pos = this.getRandomPosition();
      this.parent(pos.x, pos.y + StarEntity.HEIGHT, settings);
      
      this.addAnimation("default", [0,1,2,1,3,1,2,0]);
      this.setCurrentAnimation("default", this.changePosition.bind(this));
      this.animationspeed = 1;
      
      this.visible_ = false;
      util.executeWithDelay(function () { self.visible_ = true; }, util.getRandomInt(0, 1000));
    },
    
    update: function () {
      if (this.visible_) {
        return this.parent();
      }
      return false;
    },
    
    draw: function (context) {
      if (this.visible_) {
        this.parent(context);
      }
    },
    
    changePosition: function () {
      var pos = this.getRandomPosition();
      this.pos.x = pos.x;
      this.pos.y = pos.y;
      this.setCurrentAnimation("default", this.changePosition.bind(this));
    },
    
    getRandomPosition: function () {
      return {
        x: util.getRandomInt(0, 512 - StarEntity.WIDTH),
        y: util.getRandomInt(0, 384 - StarEntity.HEIGHT),
      }
    },
    
  });
  
  StarEntity.WIDTH = 32;
  StarEntity.HEIGHT = 32;
  
  return StarEntity;
  
});
