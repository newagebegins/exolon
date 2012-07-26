define(
  [
    "src/me",
    "src/entities/LevelCompleteWindowEntity",
    "src/entities/AwardPointsEntity",
  ],
  function (
    me,
    LevelCompleteWindowEntity,
    AwardPointsEntity
  ) {
      
  var ExitEntity = me.InvisibleEntity.extend({
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        this.collidable = false;
        me.game.remove(obj);
        this.createBonus();
        this.awardPoints();
        this.createLevelCompleteWindow();
      }
    },
    
    createBonus: function () {
      this.bonus = {};
      this.bonus.bravery = 10000;
      this.bonus.lives = me.game.HUD.getItemValue("lives");
      this.bonus.lifePrice = 1000;
      this.bonus.total = this.bonus.bravery + this.bonus.lives * this.bonus.lifePrice;
    },
    
    awardPoints: function () {
      var award = new AwardPointsEntity(this.bonus.total, 250);
      me.game.add(award, 999);
      me.game.sort.defer();
    },
    
    createLevelCompleteWindow: function (bonus) {
      var window = new LevelCompleteWindowEntity(this.bonus);
      me.game.add(window, 999);
      me.game.sort.defer();
    },
    
  });
  
  return ExitEntity;
  
});
