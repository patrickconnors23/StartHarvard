$.fn.scrollView = function (add) {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top - 70 + add
    }, 500);
    console.log('hello123');
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
    $('#navbar-button').click(function (event) {
      event.preventDefault();
      $('#intro-header-id').scrollView(0);
      console.log("hello");
    });
    $('#navbar-button').click(function (event) {
      event.preventDefault();
      $('#intro-header-id').scrollView(0);
    });
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
    var cost = false;;
    var benefit = false;;
    var time = false;;
    var different = false;;
    var teacher =false;;
    function hider () {
      $('#cost-answer').hide();
      $('#benefit-answer').hide();
      $('#time-answer').hide();
      $('#different-answer').hide();
      $('#teacher-answer').hide();
    }
    //FAQ Section
    $('#cost-question').click(function(event){
      event.preventDefault();
      if(cost == false) {
        hider();
        $('#cost-answer').slideDown(200);
        cost = true;
      }
      else {
        hider();
        cost=false;
      }

    });
    $('#benefit-question').click(function(event){
      event.preventDefault();
      if(benefit == false) {
        hider();
        $('#benefit-answer').slideDown(200);
        benefit = true;
      }
      else {
        hider();
        benefit=false;
      }
    });
    $('#time-question').click(function(event){
      event.preventDefault();
      if(time == false) {
        hider();
        $('#time-answer').slideDown(200);
        time = true;
      }
      else {
        hider();
        time=false;
      }
    });
    $('#different-question').click(function(event){
      event.preventDefault();
      if(different == false) {
        hider();
        $('#different-answer').slideDown(200);
        different = true;
      }
      else {
        hider();
        different=false;
      }
    });
    $('#teacher-question').click(function(event){
      event.preventDefault();
      if(teacher == false) {
        hider();
        $('#teacher-answer').slideDown(200);
        teacher = true;
      }
      else {
        hider();
        teacher=false;
      }
    });
});
