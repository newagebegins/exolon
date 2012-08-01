define(
  [
    "src/me",
    "src/util",
    "src/behaviors/CheckpointMovementBehavior",
  ],
  function (
    me,
    util,
    CheckpointMovementBehavior
  ) {
      
  var UpAndDownMovementBehavior = CheckpointMovementBehavior.extend({
    
    init: function (host) {
      this.parent(host)
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
    },
    
  });
  
  return UpAndDownMovementBehavior;
  
});
