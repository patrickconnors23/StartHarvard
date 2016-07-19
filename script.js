$.fn.scrollView = function (add) {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top - 70 + add
    }, 500);
  });
}

function bootstrap_equalizer() {
  $(".equalizer").each(function() {
    var heights = $(this).find(".watch").map(function() {
      return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".watch").height(maxHeight);
  });
}

$( document ).ready(function() {
    bootstrap_equalizer();
    //Menu scrolling
    $('#about-nav').click(function (event) {
      event.preventDefault();
      $('#about-nav-section').scrollView(0);
    });
    $('#about-nav2').click(function (event) {
      event.preventDefault();
      $('#about-nav-section').scrollView(0);
    });
    $('#course-nav').click(function (event) {
      event.preventDefault();
      $('#course-nav-section').scrollView(30);
    });
    $('#course-nav2').click(function (event) {
      event.preventDefault();
      $('#course-nav-section').scrollView(30);
    });
    $('#faq-nav').click(function (event) {
      event.preventDefault();
      $('#faq-nav-section').scrollView(0);
    });
    $('#faq-nav2').click(function (event) {
      event.preventDefault();
      $('#faq-nav-section').scrollView(0);
    });
    $('#team-nav').click(function (event) {
      event.preventDefault();
      $('#team-nav-section').scrollView(0);
    });
    $('#team-nav2').click(function (event) {
      event.preventDefault();
      $('#team-nav-section').scrollView(0);
    });
    $('#contact-nav').click(function (event) {
      event.preventDefault();
      $('#contact-nav-section').scrollView(0);
    });
    $('#contact-nav2').click(function (event) {
      event.preventDefault();
      $('#contact-nav-section').scrollView(0);
    });

    //Course Section
    // $('#full-stack-section').click(function(event){
    //   event.preventDefault();
    //   $('#full-stack-section').html('<p>Test</p>');
    //   $(this).removeClass('hvr-grow');
    //   console.log('hello');
    // });

    //FAQ Section
    $('#cost-question').click(function(event){
      event.preventDefault();
      $('#cost-answer').slideDown(200);
      $('#benefit-answer').hide();
      $('#time-answer').hide();
      $('#different-answer').hide();
      $('#teacher-answer').hide();
    });
    $('#benefit-question').click(function(event){
      event.preventDefault();
      $('#cost-answer').hide();
      $('#benefit-answer').slideDown(200);
      $('#time-answer').hide();
      $('#different-answer').hide();
      $('#teacher-answer').hide();
    });
    $('#time-question').click(function(event){
      event.preventDefault();
      $('#cost-answer').hide();
      $('#benefit-answer').hide();
      $('#time-answer').slideDown(200);
      $('#different-answer').hide();
      $('#teacher-answer').hide();
    });
    $('#different-question').click(function(event){
      event.preventDefault();
      $('#cost-answer').hide();
      $('#benefit-answer').hide();
      $('#time-answer').hide();
      $('#different-answer').slideDown(200);
      $('#teacher-answer').hide();
    });
    $('#teacher-question').click(function(event){
      event.preventDefault();
      $('#cost-answer').slideUp(1);
      $('#benefit-answer').slideUp(1);
      $('#time-answer').slideUp(1);
      $('#different-answer').slideUp(1);
      $('#teacher-answer').slideDown(200);
    });
});
