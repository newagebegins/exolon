define(
  [
    "src/util",
  ],
  function (
    util
  ) {
      
  var AccelerationMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      this.host.vel.x = AccelerationMovementBehavior.SPEED_NORMAL;
      this.host.pos.y += util.getRandomArbitrary(-32, 32);
    },
    
    update: function () {
      if (this.host.pos.x < 304) {
        this.host.vel.x = AccelerationMovementBehavior.SPEED_FAST;
      }
      this.host.pos.x -= this.host.vel.x;
    },
    
  });
  
  AccelerationMovementBehavior.SPEED_NORMAL = 1.5;
  AccelerationMovementBehavior.SPEED_FAST = 4;
  
  return AccelerationMovementBehavior;
  
});
