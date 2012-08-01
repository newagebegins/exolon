define(function () {
      
  var CheckpointMovementBehavior = Object.extend({
    
    init: function (host) {
      this.host = host;
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
  
  return CheckpointMovementBehavior;
  
});
