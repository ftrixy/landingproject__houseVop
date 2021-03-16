
$(function(){

    $('.gallery__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        pauseOnHover: true,

    });

    $('.header__burger').on('click', function(){
        $('.header__menu').toggleClass('header__menu--active');
        $('.header__burger').toggleClass('header__burger--active');
        $('.body').toggleClass('body--active');
    });
});

