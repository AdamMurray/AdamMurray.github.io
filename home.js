
document.addEventListener('DOMContentLoaded', function() {

  logoOnClick();

  resizeFilter();
  resizeLinksWrapperTop();

  showShowcasePage();
  hideShowcasePage();

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

function showShowcasePage() {
  $('#showcase-link').click(function() {
    $('#top-menu').addClass('right');
    $('#showcase-page').addClass('show');
  });
}

function hideShowcasePage() {
  $('#links-link').click(function() {
    $('#top-menu').removeClass('right');
    $('#showcase-page').removeClass('show');
  });
}
