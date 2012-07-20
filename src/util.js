define(function () {
  
  var util = {};
  
  /**
   * Return random integer in the range [min, max] (min and max are included).
   */
  util.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
  }
  
  return util;
  
});
