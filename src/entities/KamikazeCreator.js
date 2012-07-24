define(
  [
    "src/util",
  ],
  function (
    util
  ) {
      
  var KamikazeCreator = Object.extend({
    
    delay: 5000,
    
    init: function () {
      this.createTimer();
    },
    
    update: function () {
      return false;
    },
    
    createTimer: function () {
      var self = this;
      util.executeWithDelay(function () {
        self.createKamikaze();
        self.createTimer();
      }, this.delay);
    },
    
    createKamikaze: function () {
      // should be overriden by child classes
    },
    
  });
  
  return KamikazeCreator;
  
});
