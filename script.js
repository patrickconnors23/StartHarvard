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
      $('#stuff').scrollView();
    });
});
