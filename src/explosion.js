define(
  [
    "src/me",
    "src/entities/ExplosionParticleEntity",
  ],
  function (
    me,
    ExplosionParticleEntity
  ) {
  
  var PARTICLES_COUNT = 50;
  
  var explosion = {
    create: function (x, y) {
      for (var i = 0; i < PARTICLES_COUNT; ++i) {
        var particle = new ExplosionParticleEntity(x, y);
        me.game.add(particle, 10);
      }
      
      me.game.sort.defer();
    },
  };
  
  return explosion;
  
});
