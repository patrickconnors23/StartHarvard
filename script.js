$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
}

$( document ).ready(function() {
    $('#test').html("<p>hello</p>");

    $('#about-nav').click(function (event) {
      event.preventDefault();
      $('#about-nav-section').scrollView();
    });
    $('#course-nav').click(function (event) {
      event.preventDefault();
      $('#course-nav-section').scrollView();
    });
    $('#faq-nav').click(function (event) {
      event.preventDefault();
      $('#faq-nav-section').scrollView();
    });
    $('#team-nav').click(function (event) {
      event.preventDefault();
      $('#team-nav-section').scrollView();
    });
    $('#contact-nav').click(function (event) {
      event.preventDefault();
      $('#contact-nav-section').scrollView();
    });
});
