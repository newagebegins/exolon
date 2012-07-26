define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var AwardPointsEntity = Object.extend({
    
    init: function (points, step) {
      this.points = points;
      this.step = step !== undefined ? step : 25;
      this.timer = 0;
      this.delay = 0.04;
    },
    
    update: function () {
      this.timer +=  me.timer.tick / me.sys.fps;
      if (this.timer > this.delay) {
        this.timer = 0;
        this.award();
      }
      return false;
    },
    
    award: function () {
      this.points -= this.step;
      me.game.HUD.updateItemValue("points", this.step);
      
      if (this.points <= 0) {
        me.game.remove(this);
      }
    },
    
  });
  
  return AwardPointsEntity;
  
});
