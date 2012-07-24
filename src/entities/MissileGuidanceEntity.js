define(
  [
    "src/me",
    "src/entities/ObstacleEntity",
    "src/entities/MissileEntity",
  ],
  function (
    me,
    ObstacleEntity,
    MissileEntity
  ) {
      
  var MissileGuidanceEntity = ObstacleEntity.extend({
    
    init: function (x, y, settings) {
      this.vitorc = me.game.getEntityByName("vitorc")[0];
      settings.image = "missile_guidance";
      this.parent(x, y, settings);
    },
    
    update: function () {
      if (me.gamestat.getItemValue("aliveMissilesCount") > 0) {
        return false;
      }
      
      var missile = new MissileEntity(this.vitorc);
      me.game.add(missile, this.vitorc.z);
      me.game.sort.defer();
      
      return false;
    },
    
  });
  
  return MissileGuidanceEntity;
  
});
