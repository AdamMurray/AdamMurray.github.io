
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

  // Side menu links
  showShowcasePage();
  hideShowcasePage();

  function showShowcasePage() {
    $('#showcase-link').click(function() {
      $('#top-menu').addClass('right');
      $('#showcase-page').addClass('show');
      $('#showcase-link').addClass('active');
      $('#links-link').removeClass('active');
    });
  }

  function hideShowcasePage() {
    $('#links-link').click(function() {
      $('#top-menu').removeClass('right');
      $('#showcase-page').removeClass('show');
      $('#showcase-link').removeClass('active');
      $('#links-link').addClass('active');
    });
  }
}
