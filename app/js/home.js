
document.addEventListener('DOMContentLoaded', function() {

  preparePage();
  attachEvents();

});

/*
* Page preparation
*/
function preparePage() {
  // Initial resizing
  resizeFilter();
  resizeLinksWrapperTop();

  function resizeFilter() {
    $('#filter').css('height', $(window).height());
  }

  function resizeLinksWrapperTop() {
    $('.links-wrapper').css('top', $(window).height());
  }
}

/*
* Event handling
*/
function attachEvents() {
  // Click handlers
  logoOnClick();

  // Side menu links
  showShowcasePage();
  hideShowcasePage();

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
      $('#links-page').addClass('hide');
      $('#showcase-link').addClass('active');
      $('#links-link').removeClass('active');
    });
  }

  function hideShowcasePage() {
    $('#links-link').click(function() {
      $('#top-menu').removeClass('right');
      $('#showcase-page').removeClass('show');
      $('#links-page').removeClass('hide');
      $('#showcase-link').removeClass('active');
      $('#links-link').addClass('active');
    });
  }
}
