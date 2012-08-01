define(
  [
    "src/me",
    "src/behaviors/CheckpointMovementBehavior",
  ],
  function (
    me,
    CheckpointMovementBehavior
  ) {
      
  var ZigZagMovementBehavior = CheckpointMovementBehavior.extend({
    
    init: function (host) {
      this.parent(host);
      
      this.checkpoints = [
        {
          vel: new me.Vector2d(-3, -3),
          distance: 120,
        },
        {
          vel: new me.Vector2d(-3, 3),
          distance: 120,
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
          distance: 180,
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
    },
    
  });
  
  return ZigZagMovementBehavior;
  
});
