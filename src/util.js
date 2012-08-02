define(["src/me", "src/global"], function (me, global) {
  
  var util = {};
  
  /**
   * Return random integer in the range [min, max] (min and max are included).
   */
  util.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
  };
  
  util.arrayRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  util.randomSign = function () {
    return util.arrayRandomElement([-1, 1]);
  };
  
  // Returns a random number between min and max  
  util.getRandomArbitrary = function (min, max) {  
    return Math.random() * (max - min) + min;  
  };
  
  util.strlpad = function (s, padString, length) {
    var str = "" + s;
    while (str.length < length) {
      str = padString + str;
    }
    return str;
  };
  
  var ExecutionTimer = Object.extend({
    init: function (callback, delay) {
      this.time = 0;
      this.callback = callback;
      this.delay = delay;
    },
    update: function () {
      this.time +=  (me.timer.tick / me.sys.fps) * 1000;
      if (this.time > this.delay) {
        this.callback();
        me.game.remove(this);
      }
    }
  });
  
  /**
   * delay - in ms
   */
  util.executeWithDelay = function (callback, delay) {
    me.game.add(new ExecutionTimer(callback, delay), 1);
    me.game.sort.defer();
  };
  
  util.setAmmo = function (value) {
    if (me.game.HUD) {
      me.game.HUD.setItemValue("ammo", value);
    }
    global.ammo = value;
  };
  
  util.updateAmmo = function (value) {
    if (me.game.HUD) {
      me.game.HUD.updateItemValue("ammo", value);
    }
    global.ammo += value;
  };
  
  util.setGrenades = function (value) {
    if (me.game.HUD) {
      me.game.HUD.setItemValue("grenades", value);
    }
    global.grenades = value;
  };
  
  util.updateGrenades = function (value) {
    if (me.game.HUD) {
      me.game.HUD.updateItemValue("grenades", value);
    }
    global.grenades += value;
  };
  
  util.setPoints = function (value) {
    if (me.game.HUD) {
      me.game.HUD.setItemValue("points", value);
    }
    global.points = value;
  };
  
  util.updatePoints = function (value) {
    if (me.game.HUD) {
      me.game.HUD.updateItemValue("points", value);
    }
    global.points += value;
  };
  
  util.setLives = function (value) {
    if (me.game.HUD) {
      me.game.HUD.setItemValue("lives", value);
    }
    global.lives = value;
  };
  
  util.updateLives = function (value) {
    if (me.game.HUD) {
      me.game.HUD.updateItemValue("lives", value);
    }
    global.lives += value;
  };
  
  util.setZones = function (value) {
    if (me.game.HUD) {
      me.game.HUD.setItemValue("zones", value);
    }
    global.zones = value;
  };
  
  util.updateZones = function (value) {
    if (me.game.HUD) {
      me.game.HUD.updateItemValue("zones", value);
    }
    global.zones += value;
  };
  
  return util;
  
});
