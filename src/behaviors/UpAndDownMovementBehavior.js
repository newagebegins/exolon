define(
  [
    "src/util",
  ],
  function (
    util
  ) {
      
  var VERTICAL_MOVEMENT = 80;
  var STOP_X = 336;
  var SPEED_X_NORMAL = 1.5;
  var SPEED_X_FAST = 4;
  var SPEED_Y = 1;
  var STATES = {
    LEFT_1: 1,
    UP: 2,
    DOWN: 3,
    LEFT_2: 4,
  };
      
  var UpAndDownMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      this.state = STATES.LEFT_1;
    },
    
    update: function () {
      if (this.state == STATES.LEFT_1) {
        this.host.pos.x -= SPEED_X_NORMAL;
        
        if (this.host.pos.x <= STOP_X) {
          this.host.pos.x = STOP_X;
          this.initY = this.host.pos.y;
          this.ceilY = this.host.pos.y - VERTICAL_MOVEMENT;
          this.state = STATES.UP;
        }
      }
      else if (this.state == STATES.UP) {
        this.host.pos.y -= SPEED_Y;
        
        if (this.host.pos.y <= this.ceilY) {
          this.host.pos.y = this.ceilY;
          this.floorY = this.initY - util.getRandomInt(0, 32);
          this.state = STATES.DOWN;
        }
      }
      else if (this.state == STATES.DOWN) {
        this.host.pos.y += SPEED_Y;
        
        if (this.host.pos.y >= this.floorY) {
          this.host.pos.y = this.floorY;
          this.state = STATES.LEFT_2;
        }
      }
      if (this.state == STATES.LEFT_2) {
        this.host.pos.x -= SPEED_X_FAST;
      }
    },
    
  });
  
  return UpAndDownMovementBehavior;
  
});
