define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var AwardPointsEntity = Object.extend({
    
    init: function (points, step) {
      this.points = points;
      this.step = step !== undefined ? step : 25;
      this.timer = 0;
      this.delay = 0.04;
      this.onComplete = null;
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
      util.updatePoints(this.step);
      
      if (this.points <= 0) {
        if (this.onComplete) {
          this.onComplete();
        }
        me.game.remove(this);
      }
    },
    
    destroy: function () {
      // If player left the screen before all points were added, add remaining
      // points.
      if (this.points > 0) {
        util.updatePoints(this.points);
      }
      
      // return true to remove this entity from the game manager
      return true;
    },
    
  });
  
  return AwardPointsEntity;
  
});
