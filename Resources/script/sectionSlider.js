import "./owl.carousel.js";

export default function () {
  $(".owl-carousel").each(function () {
    let items = $(this).attr("show-items") || 1.2;
    $(this).owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: items,
    });
  });
}
