(function($) {
  "use strict"; // Start of use strict

  // Handle navigation button states
  $('.nav-link').click(function() {
    $('.nav-link').removeClass("disabled active");
    $(this).addClass("disabled active");
    $('.navbar-collapse').collapse('hide');
  });

  $('.home-btn').click(function() {
    $('.nav-link').removeClass("disabled active");
    $('#home-nav').addClass("disabled active");
  });

  $('#next-tour-btn').click(function() {
    $('.nav-link').removeClass("disabled active");
    $('#next-tour-nav').addClass("disabled active");
  });

  $('.faq-link').click(function() {
    $('.nav-link').removeClass("disabled active");
    $('#faq-nav').addClass("disabled active");
  });

  $('#location-btn').click(function() {
    $('.nav-link').removeClass("disabled active");
    $('#location-nav').addClass("disabled active");
  });

})(jQuery); // End of use strict
