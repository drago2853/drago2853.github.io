
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });

  
$(window).resize(function () {
    lazyLoadInstance.update();
});
