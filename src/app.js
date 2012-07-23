define(
  [
    "src/me",
    "src/config",
    "src/resources/resources",
    
    "src/screens/PlayScreen",
    
    "src/entities/VitorcEntity",
    "src/entities/TurretEntity",
    "src/entities/CocoonEntity",
    "src/entities/RadarEntity",
    "src/entities/ShipFireEntity",
    "src/entities/LightEntity",
  ],
  function (
    me,
    config,
    resources,
    
    PlayScreen,
    
    VitorcEntity,
    TurretEntity,
    CocoonEntity,
    RadarEntity,
    ShipFireEntity,
    LightEntity
  ) {
    
  var app = {
    
    onload: function () {
      me.debug.renderHitBox = config.renderHitBox;
      me.debug.renderCollisionMap = config.renderCollisionMap;
      
      me.video.init("app", 512, 384);
      me.loader.onload = this.loaded.bind(this);
      me.loader.preload(resources);
      
      me.state.change(me.state.LOADING);
    },
    
    loaded: function () {
      me.state.set(me.state.PLAY, new PlayScreen());
      
      me.entityPool.add("vitorc", VitorcEntity);
      me.entityPool.add("turret", TurretEntity);
      me.entityPool.add("cocoon", CocoonEntity);
      me.entityPool.add("radar", RadarEntity);
      me.entityPool.add("ship_fire", ShipFireEntity);
      me.entityPool.add("light", LightEntity);
      
      me.input.bindKey(me.input.KEY.LEFT, "left");
      me.input.bindKey(me.input.KEY.RIGHT, "right");
      me.input.bindKey(me.input.KEY.UP, "jump");
      me.input.bindKey(me.input.KEY.DOWN, "duck");
      me.input.bindKey(me.input.KEY.SPACE, "fire");
      
      me.state.change(me.state.PLAY);
    },
    
  };

  return app;
});
