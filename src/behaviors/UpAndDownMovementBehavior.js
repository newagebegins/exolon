define(
  [
    "src/me",
    "src/util",
  ],
  function (
    me,
    util
  ) {
      
  var UpAndDownMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      
      this.checkpoints = [
        {
          vel: new me.Vector2d(-1.5, 0),
          distance: 176,
        },
        {
          vel: new me.Vector2d(0, -1),
          distance: 80,
        },
        {
          vel: new me.Vector2d(0, 1),
          distance: 80 - util.getRandomInt(0, 32),
        },
        {
          vel: new me.Vector2d(-4, 0),
        },
      ];
  
      this.checkpoint = 0;
      this.passedDistance = 0;
    },
    
    update: function () {
      var cp = this.checkpoints[this.checkpoint];
      this.host.pos.add(cp.vel);
      this.passedDistance += cp.vel.length();
      
      if (this.checkpoint < this.checkpoints.length - 1 && this.passedDistance >= cp.distance) {
        this.passedDistance = 0;
        this.checkpoint++;
      }
    },
    
  });
  
  return UpAndDownMovementBehavior;
  
});
