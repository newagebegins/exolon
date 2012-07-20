define(
  [
    "src/resources/images",
    "src/resources/maps",
  ],
  function (
    images,
    maps
  ) {
  
  var resources = [].concat(images, maps);
  
  return resources;
  
});
