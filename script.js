$(document).ready(function() {
    $('.rev_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesTiScroll: 2,
        prevArrow: '<button class="rev__slider-btn rev__slider-btnprev"><img src="./img/arrow_left.svg"></button>',
        nextArrow: '<button class="rev__slider-btn rev__slider-btnnext"><img src="./img/arrow_right.svg"></button>', 
    })
})