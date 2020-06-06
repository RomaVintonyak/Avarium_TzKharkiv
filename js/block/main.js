jQuery(document).ready(function(){
  "use script";
  //show modal window
  var showModal = $("#quote");
  var modalWindow = $("#modalQuote");
  showModal.on("click", function(){
    modalWindow.addClass("modal__window--show");
    $("body").css({
      "overflow-y": "hidden"
    });
  });
  //close modal window
  var closeModal = $("[data-close]");
  closeModal.on("click", function(){
    modalWindow.removeClass("modal__window--show");
    $("body").css({
      "overflow-y": "scroll"
    });
  });
  //slick slider initialize
  $("#aboutSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'ease-in-out',
    speed: 500,
    infinite: true,
    /*responsive*/
    responsive: [
{
  breakpoint: 991,
  settings: {
    slidesToShow: 1
  }
}]
});
});