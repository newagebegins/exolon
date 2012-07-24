define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
    "src/entities/MissileEntity",
    "src/entities/AwardPointsEntity",
  ],
  function (
    me,
    ObstacleEntity,
    MissileEntity,
    AwardPointsEntity
  ) {
      
  var MissileGuidanceEntity = ObstacleEntity.extend({
    
    points: 0,
    
    init: function (x, y, settings) {
      this.vitorc = me.game.getEntityByName("vitorc")[0];
      settings.image = "missile_guidance";
      this.parent(x, y, settings);
    },
    
    update: function () {
      if (me.gamestat.getItemValue("aliveMissilesCount") > 0 || !this.alive) {
        return false;
      }
      
      this.missile = new MissileEntity(this.vitorc);
      me.game.add(this.missile, this.vitorc.z);
      me.game.sort.defer();
      
      return false;
    },
    
    onDestroyEvent: function () {
      this.missile.explode();
      
      var award = new AwardPointsEntity(MissileGuidanceEntity.POINTS);
      me.game.add(award, 999);
      me.game.sort.defer();
    },
    
  });
  
  MissileGuidanceEntity.POINTS = 1000;
  
  return MissileGuidanceEntity;
  
});
