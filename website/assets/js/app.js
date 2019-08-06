function navbarToggle() {
  const burger = $('.navbar-burger'),
    menu = $('.navbar-menu');

  burger.click(function() {
    [burger, menu].forEach(function(elem) {
      elem.toggleClass('is-active');
    });
  });
}

$(function() {
  navbarToggle();
});
