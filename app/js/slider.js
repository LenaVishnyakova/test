// настройка слайдера
$(".hero").slick({
  dots: true,
  prevArrow: false,
  appendDots: ".aside__dots",
  appendArrows: ".aside__next-slide",
  nextArrow:
    '<button class="slick-next"><img src="./images/iconArrow.svg" alt="next"></button>',
  customPaging: function (slider, i) {
    return "<button>" + "" + "</button>";
  },
});

// изменение номера текущего слайда
$(".hero").on("afterChange", function (event, slick, currentSlide) {
  $(".aside__current-slide").text(("0" + (currentSlide + 1)).slice(-2));
});

// назначение кнопки next
$(".aside__next-slide").on("click", function () {
  $slider.slick("slickNext");
});
