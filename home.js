
document.addEventListener('DOMContentLoaded', function() {

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
