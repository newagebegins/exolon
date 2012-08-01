define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var ZigZagMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      
      this.checkpoints = [
        {
          vel: new me.Vector2d(-3, -4),
          distance: 90,
        },
        {
          vel: new me.Vector2d(-3, 4),
          distance: 90,
        },
        {
          vel: new me.Vector2d(-3, -3),
          distance: 60,
        },
        {
          vel: new me.Vector2d(0, 3),
          distance: 40,
        },
        {
          vel: new me.Vector2d(-3, 0),
          distance: 190,
        },
        {
          vel: new me.Vector2d(0, -3),
          distance: 60,
        },
        {
          vel: new me.Vector2d(3, 0),
          distance: 60,
        },
        {
          vel: new me.Vector2d(0, 3),
          distance: 60,
        },
        {
          vel: new me.Vector2d(-5, 0),
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
  
  return ZigZagMovementBehavior;
  
});
