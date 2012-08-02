define(
  [
    "src/me",
    "src/entities/ExplosionParticleEntity",
  ],
  function (
    me,
    ExplosionParticleEntity
  ) {
  
  var explosion = {
    create: function (x, y, particlesCount) {
      for (var i = 0; i < particlesCount; ++i) {
        var particle = new ExplosionParticleEntity(x, y);
        me.game.add(particle, 10);
      }
      
      me.game.sort.defer();
      me.audio.play("explosion");
    },
  };
  
  return explosion;
  
});
