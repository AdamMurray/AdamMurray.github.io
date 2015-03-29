$(function() {
  toggleGunFireType();
  shootOnTriggerClick();
})();

function toggleGunFireType() {
  var raygun = $(".ray-gun");
  var toggleSwitch = $(".toggle");
  toggleSwitch.click(function() {
    if (raygun.hasClass("stun")) {
      raygun.removeClass("stun");
      raygun.addClass("kill");
    }
    else {
      raygun.addClass("stun");
      raygun.removeClass("kill");
    }
  });
}

function shootOnTriggerClick() {
  var raygun = $(".ray-gun");
  var trigger = $(".trigger");
  trigger.click(function() {
    if (raygun.hasClass("shoot")) {
      raygun.removeClass("shoot");
    }
    else {
      raygun.addClass("shoot");
    }
  });
}
