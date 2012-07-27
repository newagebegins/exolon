define(
  [
    "src/util",
  ],
  function (
    util
  ) {
      
  var SwingAndAccelerationMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
      
      this.host.pos.y += util.getRandomArbitrary(-4, 0);
      this.host.pos.x += util.getRandomArbitrary(0, 32);
      
      this.swing = true;
      this.host.vel.x = SwingAndAccelerationMovementBehavior.SPEED_NORMAL;
      
      this.straightFlyTimer = 0;
      this.straightFlyDuration = 40;
    },
    
    update: function () {
      if (this.host.pos.x < 336) {
        this.swing = false;
      }
      
      if (this.swing) {
        this.host.pos.y += util.getRandomArbitrary(1, 3) * Math.sin(this.host.pos.x / 20);
      }
      else {
        this.straightFlyTimer++;
        if (this.straightFlyTimer > this.straightFlyDuration) {
          this.host.vel.x = SwingAndAccelerationMovementBehavior.SPEED_FAST;
        }
      }
      
      this.host.pos.x -= this.host.vel.x;
    },
    
  });
  
  SwingAndAccelerationMovementBehavior.SPEED_NORMAL = 1.5;
  SwingAndAccelerationMovementBehavior.SPEED_FAST = 4;
  
  return SwingAndAccelerationMovementBehavior;
  
});
