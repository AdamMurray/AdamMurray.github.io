(function () {

  // TODO: add json with entries for various speeds, e.g.:
  // slow, normal, fast, warp, and set numbers that correspond to them.
  // This should clean up the code a bit
  var starFieldWidth = window.innerWidth * 0.9;
  var starFieldHeight = window.innerHeight * 0.7;
  var numberOfStars = 50;

  positionStars(starFieldWidth, starFieldHeight);
  animateStars(starFieldWidth, 2);

  //outerTriangleOnClick();
})();

function outerTriangleOnClick() {
  var triangle = document.getElementById('outer-triangle');
  triangle.onclick = function() {
    if (triangle.className.indexOf('clicked') != -1) {
      triangle.className = '';
    }
    else {
      triangle.className = 'clicked';
    }
  }
}

function positionStars(starFieldWidth, starFieldHeight) {
  var starField = document.getElementById('star-field');
  var stars = starField.children;

  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
    var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
    star.style.top = topOffset + 'px';
    star.style.left = leftOffset + 'px';
    star.style.position = 'absolute';
  }
}

function animateStars(starFieldWidth, speed) {
  var starField = document.getElementById('star-field');
  var stars = starField.children;

  function getStarColor(index) {
    if (index % 8 == 0)
    return 'red';
    else if (index % 10 == 0)
    return 'yellow';
    else if (index % 17 == 0)
    return 'blue';
    else
    return 'white';
  }

  function getStarDistance(index) {
    if (index % 6 == 0)
    return '';
    else if (index % 9 == 0)
    return 'near';
    else if (index % 2 == 0)
    return 'far';
    else
    return 0;
  }

  function getStarRelativeSpeed(index) {
    if (index % 6 == 0)
    return 1;
    else if (index % 9 == 0)
    return 2;
    else if (index % 2 == 0)
    return -1;
    else
    return 0;
  }

  setInterval(function() {
    for (var i = 0; i < stars.length; i++) {
      stars[i].className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i);

      var currentLeft = parseInt(stars[i].style.left, 10);
      var leftChangeAmount = speed + getStarRelativeSpeed(i);
      var leftDiff;
      if (currentLeft - leftChangeAmount < 0) {
        leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
      }
      else {
        leftDiff = currentLeft - leftChangeAmount;
      }
      stars[i].style.left = (leftDiff) + 'px';
    }

  }, 20);

}
