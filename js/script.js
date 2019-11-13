$(function () {

    // abre e fecha menu
    $('.nav-toggle, .nav-close').click(function (e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    });

    //fixar header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('fixed');

        } else {
            $('.header').removeClass('fixed');
        }
    });
});