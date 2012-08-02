define(
  [
    "src/me",
    "src/config",
    "src/screens",
    "src/resources/resources",
    
    "src/screens/TitleScreen",
    "src/screens/PlayScreen",
    "src/screens/BonusScreen",
    
    "src/entities/VitorcEntity",
    "src/entities/TurretEntity",
    "src/entities/CocoonEntity",
    "src/entities/RadarEntity",
    "src/entities/RocketEntity",
    "src/entities/ShipFireEntity",
    "src/entities/LightEntity",
    "src/entities/GrenadePackEntity",
    "src/entities/AmmoPackEntity",
    "src/entities/TeleportEntity",
    "src/entities/PistonEntity",
    "src/entities/BubbleCreatorEntity",
    "src/entities/IncubatorEntity",
    "src/entities/EggEntity",
    "src/entities/DoubleLauncherEntity",
    "src/entities/MineEntity",
    "src/entities/MissileGuidanceEntity",
    "src/entities/InterceptorCreatorEntity",
    "src/entities/JellyfishCreatorEntity",
    "src/entities/WaggonEntity",
    "src/entities/CombinedLauncherTopEntity",
    "src/entities/CombinedLauncherBottomEntity",
    "src/entities/SquareLightEntity",
    "src/entities/DischargeEntity",
    "src/entities/ExitEntity",
    "src/entities/FungusEntity",
    "src/entities/LouseCreatorEntity",
    "src/entities/CapsuleEntity",
    "src/entities/BeamEntity",
    "src/entities/FlasherCreatorEntity",
    "src/entities/FirCreatorEntity",
  ],
  function (
    me,
    config,
    screens,
    resources,
    
    TitleScreen,
    PlayScreen,
    BonusScreen,
    
    VitorcEntity,
    TurretEntity,
    CocoonEntity,
    RadarEntity,
    RocketEntity,
    ShipFireEntity,
    LightEntity,
    GrenadePackEntity,
    AmmoPackEntity,
    TeleportEntity,
    PistonEntity,
    BubbleCreatorEntity,
    IncubatorEntity,
    EggEntity,
    DoubleLauncherEntity,
    MineEntity,
    MissileGuidanceEntity,
    InterceptorCreatorEntity,
    JellyfishCreatorEntity,
    WaggonEntity,
    CombinedLauncherTopEntity,
    CombinedLauncherBottomEntity,
    SquareLightEntity,
    DischargeEntity,
    ExitEntity,
    FungusEntity,
    LouseCreatorEntity,
    CapsuleEntity,
    BeamEntity,
    FlasherCreatorEntity,
    FirCreatorEntity
  ) {
    
  var app = {
    
    onload: function () {
      me.debug.renderHitBox = config.renderHitBox;
      me.debug.renderCollisionMap = config.renderCollisionMap;
      
      me.video.init("app", 512, 384);
      me.audio.init("mp3,ogg");
      
      me.loader.onload = this.loaded.bind(this);
      me.loader.preload(resources);
      
      me.state.change(me.state.LOADING);
    },
    
    loaded: function () {
      me.state.set(screens.TITLE, new TitleScreen());
      me.state.set(screens.PLAY, new PlayScreen());
      me.state.set(screens.BONUS, new BonusScreen());
      
      me.entityPool.add("vitorc", VitorcEntity);
      me.entityPool.add("turret", TurretEntity);
      me.entityPool.add("cocoon", CocoonEntity);
      me.entityPool.add("radar", RadarEntity);
      me.entityPool.add("rocket", RocketEntity);
      me.entityPool.add("ship_fire", ShipFireEntity);
      me.entityPool.add("light", LightEntity);
      me.entityPool.add("grenade_pack", GrenadePackEntity);
      me.entityPool.add("ammo_pack", AmmoPackEntity);
      me.entityPool.add("teleport", TeleportEntity);
      me.entityPool.add("piston", PistonEntity);
      me.entityPool.add("bubble_creator", BubbleCreatorEntity);
      me.entityPool.add("incubator", IncubatorEntity);
      me.entityPool.add("egg", EggEntity);
      me.entityPool.add("double_launcher", DoubleLauncherEntity);
      me.entityPool.add("mine", MineEntity);
      me.entityPool.add("missile_guidance", MissileGuidanceEntity);
      me.entityPool.add("interceptor_creator", InterceptorCreatorEntity);
      me.entityPool.add("jellyfish_creator", JellyfishCreatorEntity);
      me.entityPool.add("waggon", WaggonEntity);
      me.entityPool.add("combined_launcher_top", CombinedLauncherTopEntity);
      me.entityPool.add("combined_launcher_bottom", CombinedLauncherBottomEntity);
      me.entityPool.add("square_light", SquareLightEntity);
      me.entityPool.add("discharge", DischargeEntity);
      me.entityPool.add("exit", ExitEntity);
      me.entityPool.add("fungus", FungusEntity);
      me.entityPool.add("louse_creator", LouseCreatorEntity);
      me.entityPool.add("capsule", CapsuleEntity);
      me.entityPool.add("beam", BeamEntity);
      me.entityPool.add("flasher_creator", FlasherCreatorEntity);
      me.entityPool.add("fir_creator", FirCreatorEntity);
      
      me.input.bindKey(me.input.KEY.LEFT, "left");
      me.input.bindKey(me.input.KEY.RIGHT, "right");
      me.input.bindKey(me.input.KEY.UP, "jump");
      me.input.bindKey(me.input.KEY.DOWN, "duck");
      me.input.bindKey(me.input.KEY.SPACE, "fire");
      
      me.state.change(screens.TITLE);
    },
    
  };

  return app;
});
