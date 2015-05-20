
document.addEventListener('DOMContentLoaded', function() {

  logoOnClick();

});

// function resizeFilter() {
//   $('#filter').css('height', $(window).height());
// }
//
// function resizeLinksWrapperTop() {
//   $('.links-wrapper').css('top', $(window).height());
// }

function logoOnClick() {
  var logo = document.getElementById('logo');
  var topMenu = document.getElementById('top-menu');

  logo.onclick = function() {
    topMenu.className = 'entered';
  };
}
