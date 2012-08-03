define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var LoadingScreen = me.ScreenObject.extend({
    
    bar: {
      x: 416,
      y: 368,
      width: 96,
      height: 16,
    },
    
    init: function() {
      this.parent(true);
      this.bgImage = me.loader.getImage("loading_bg");
      this.invalidate = false;
      this.loadPercent = 0;
      this.removeLoadingMessage = true;
      me.loader.onProgress = this.onProgressUpdate.bind(this);
    },
    
    onProgressUpdate: function(progress) {
      this.loadPercent = progress;
      if (this.loadPercent > 1) {
        this.loadPercent = 1;
      }
      this.invalidate = true;
    },
    
    update : function() {
			if (this.invalidate === true) {
				this.invalidate = false;
				return true;
			}
			return false;
		},

    draw: function(context) {
      if (this.removeLoadingMessage) {
        this.removeLoadingMessage = false;
        $('#loading').remove();
      }
      
      context.drawImage(this.bgImage, 0, 0);
      
      var width = Math.floor(this.loadPercent * this.bar.width);
      context.strokeStyle = "#00C5C5";
			context.strokeRect(this.bar.x, this.bar.y, this.bar.width, this.bar.height);
			context.fillStyle = "#00B500";
			context.fillRect(this.bar.x + 2, this.bar.y + 2, width - 4, this.bar.height - 4);
    }

  });
  
  return LoadingScreen;
});
