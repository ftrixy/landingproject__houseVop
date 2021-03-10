// $(document).ready(function() {
//     $('.header__burger').click(function(event) {
//         $('.header__burger,.header__menu').toogleClass('active');
        // $('body').toogleClass('lock');
//     });

// });


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

