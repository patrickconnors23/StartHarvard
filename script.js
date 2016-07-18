$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
}

$( document ).ready(function() {
    //Menu scrolling
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

    //Course Section
    $('#full-stack-section').click(function(event){
      event.preventDefault();
      $('#full-stack-section').html('<p>Test</p>');
      $(this).removeClass('hvr-grow');
      console.log('hello');
    });

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
