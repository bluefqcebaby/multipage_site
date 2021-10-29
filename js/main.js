

$(function () {
    let i = 0;
    $('.asideshow').click(function () {
        i++
        if (i == 2) {
            css1()
            setTimeout(css, 500)
            i = 0;
        } else {
            $('.aside').toggleClass('aside--action__help')
            setTimeout(css1, 100)
        }
    })
    $('.header__btn-menu').click(function () {
        $('.menu').toggleClass('menu--open')
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
    });
    $('.wha').slick({
        dots: true,
        arrows: false,
    });
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true,
                arrows: false,
                }
            }
        ]
    });
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>',
    })
    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    })

    function css() {
        $('.aside').toggleClass('aside--action__help')
    }

    function css1() {
        $('.aside').toggleClass('aside--action')
    }
})