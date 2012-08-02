define(
  [
    "src/resources/images",
    "src/resources/sound",
    "src/resources/maps",
  ],
  function (
    images,
    sound,
    maps
  ) {
  
  var resources = [].concat(images, sound, maps);
  
  return resources;
  
});
