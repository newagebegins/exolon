define(
  [
    "src/me",
    "src/global",
    "src/entities/LevelCompleteWindowEntity",
    "src/entities/AwardPointsEntity",
  ],
  function (
    me,
    global,
    LevelCompleteWindowEntity,
    AwardPointsEntity
  ) {
      
  var ExitEntity = me.InvisibleEntity.extend({
    
    onCollision: function (res, obj) {
      if (obj.name == "vitorc") {
        this.collidable = false;
        me.game.remove(obj);
        this.createBonus(obj);
        this.createLevelCompleteWindow();
        this.awardPoints();
      }
    },
    
    createBonus: function (vitorc) {
      this.bonus = {};
      this.bonus.bravery = vitorc.outfit == "vitorc" ? 10000 : 0;
      this.bonus.lives = global.lives;
      this.bonus.lifePrice = 1000;
      this.bonus.total = this.bonus.bravery + this.bonus.lives * this.bonus.lifePrice;
    },
    
    createLevelCompleteWindow: function () {
      this.window = new LevelCompleteWindowEntity(this.bonus);
      me.game.add(this.window, 999);
      me.game.sort.defer();
    },
    
    awardPoints: function () {
      this.award = new AwardPointsEntity(this.bonus.total, 250);
      this.award.onComplete = this.window.onAwardComplete.bind(this.window);
      me.game.add(this.award, 999);
      me.game.sort.defer();
    },
    
  });
  
  return ExitEntity;
  
});
