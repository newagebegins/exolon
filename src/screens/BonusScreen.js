define(
  [
    "src/me",
    "src/config",
    "src/util",
    "src/global",
    "src/screens",
  ],
  function (
    me,
    config,
    util,
    global,
    screens
  ) {
      
  var BonusScreen = me.ScreenObject.extend({
    
    init: function () {
      this.parent(true);
      
      this.bgImg = me.loader.getImage("bonus_screen");
      this.titleImg = me.loader.getImage("title");
      this.arrowImg = me.loader.getImage("arrow");
      
      this.fontWhite = new me.BitmapFont("font_white", 16);
      this.fontWhite.set("left");
      
      this.fontGreen = new me.BitmapFont("font_green", 16);
      this.fontGreen.set("left");
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left");
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left");
      
      this.points = [0, 1000, 0, 3000, 0, 5000, 0, 7000];
    },
    
    onResetEvent: function () {
      this.pointer = 0;
      this.pointerTimer = 0;
      this.pointerDuration = 1;
      
      this.active = true;
      this.firePressed = me.input.isKeyPressed('fire');
    },
    
    update: function () {
      if (!this.active) {
        return false;
      }
      
      this.updatePointer();
      this.handleInput();
      
      return true;
    },
    
    updatePointer: function () {
      this.pointerTimer++;
      
      if (this.pointerTimer > this.pointerDuration) {
        this.pointerTimer = 0;
        
        this.pointer++;
        if (this.pointer >= this.points.length) {
          this.pointer = 0;
        }
      }
    },
    
    handleInput: function () {
      if (me.input.isKeyPressed('fire')) {
        if (!this.firePressed) {
          this.firePressed = true;
          this.active = false;
          util.executeWithDelay(this.nextLevel.bind(this), 1000);
        }
      }
      else {
        this.firePressed = false;
      }
    },
    
    nextLevel: function () {
      util.updatePoints(this.points[this.pointer]);
      util.updateZones(1);
      
      if (global.lives < config.maxLives) {
        util.updateLives(1);
      }
      
      global.ammo = config.initialAmmo;
      global.grenades = config.initialGrenades;
      
      me.state.change(screens.PLAY);
    },
    
    draw: function (context) {
      me.video.clearSurface(context, "black");
      context.drawImage(this.bgImg, 0, 0);
      context.drawImage(this.titleImg, 128, 48);
      this.fontWhite.draw(context, "EXOLON BONUS SCREEN!", 96, 128);
      this.fontGreen.draw(context, "PRESS FIRE TO STOP POINTER", 48, 160);
      this.drawPointsAndPointer(context);
    },
    
    drawPointsAndPointer: function (context) {
      var font = this.fontCyan;
      
      for (var i in this.points) {
        font = font === this.fontCyan ? this.fontYellow : this.fontCyan;
        
        var str = util.strlpad(this.points[i], "0", 5);
        str += " POINTS";
        
        var x = 144;
        var y = 208 + i * 16;
        font.draw(context, str, x, y);
        
        if (this.pointer == i) {
          context.drawImage(this.arrowImg, x + 13 * 16, y);
        }
      }
    },
    
  });
  
  return BonusScreen;
});
