define(
  [
    "src/util",
  ],
  function (
    util
  ) {
      
  var CircularMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      this.host.pos.y += util.getRandomArbitrary(-16, 16);
      this.moveType = "straight_1";
      this.moveAngle = Math.PI;
    },
    
    update: function () {
      if (this.moveType == "straight_1" && this.host.pos.x < CircularMovementBehavior.START_CIRCULAR_MOTION_X) {
        this.moveType = "circular";
      }
      
      if (this.moveType == "straight_1" || this.moveType == "straight_2") {
        this.host.pos.x -= CircularMovementBehavior.SPEED;
      }
      else if (this.moveType == "circular") {
        var x = Math.cos(this.moveAngle) * CircularMovementBehavior.CIRCULAR_MOTION_RADIUS;
        var y = Math.sin(this.moveAngle) * CircularMovementBehavior.CIRCULAR_MOTION_RADIUS;
        
        this.host.pos.x += x / 20;
        this.host.pos.y += y / 18;
        
        this.moveAngle += 0.05;
        
        if (this.moveAngle >=  3 * Math.PI)  {
          this.moveType = "straight_2";
        }
      }
    },
    
  });
  
  CircularMovementBehavior.SPEED = 3;
  CircularMovementBehavior.START_CIRCULAR_MOTION_X = 220;
  CircularMovementBehavior.CIRCULAR_MOTION_RADIUS = 64;
  
  return CircularMovementBehavior;
  
});
