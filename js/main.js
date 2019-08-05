


$( document ).ready(function() {
  $(".testimonials.owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    navText: false,
    center:true,
    margin: 10,
  });


  $('.tab').on('click', function(e){
    console.log($(this).attr('href'))
    $('.tab').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
    let href = $(this).attr('href')
    var $id = $(href);

    var pos = $id.offset().top;

    console.log(pos)
    $('body, html').animate({scrollTop: pos-160});

});

$(window).on('scroll', function() {
    $('.scroll').each(function() {
        if($(window).scrollTop() >= $(this).offset().top-160) {
            var id = $(this).attr('id');
            $('.tab').removeClass('active');
            $('.tabs a[href=\\#'+ id +']').addClass('active');
        }
    });
});


});


