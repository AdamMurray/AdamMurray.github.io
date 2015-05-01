
document.addEventListener('DOMContentLoaded', function() {

  // TODO: add json with entries for various speeds, e.g.:
  // slow, normal, fast, warp, and set numbers that correspond to them.
  // This should clean up the code a bit
  var starFieldWidth = window.innerWidth * 0.9;
  var starFieldHeight = window.innerHeight * 0.7;

  //positionStars(starFieldWidth, starFieldHeight);
  //animateStars(starFieldWidth, 1);

  burgerButtonOnClick();
  logoOnClick();

  resizeFilter();
  resizeLinksWrapperTop();

});

function resizeFilter() {
  $('#filter').css('height', $(window).height());
}

function resizeLinksWrapperTop() {
  $('.links-wrapper').css('top', $(window).height());
}

function logoOnClick() {
  var logo = document.getElementById('logo');
  var topMenu = document.getElementById('top-menu');

  logo.onclick = function() {
    topMenu.className = 'entered';
  };
}

function burgerButtonOnClick() {
  var burgerButton = document.getElementById('burger-button');
  var slideMenu = document.getElementById('slide-menu');

  burgerButton.onclick = function() {
    if (burgerButton.className.indexOf('clicked') != -1) {
      burgerButton.className = '';
      slideMenu.className = '';
    }
    else {
      burgerButton.className = 'clicked';
      slideMenu.className = 'open';
    }
  };
}
