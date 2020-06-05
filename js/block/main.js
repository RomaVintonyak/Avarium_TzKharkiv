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
  var closeModal = $("#modalClose");
  var modalOverlay = $("#modalQuote");
  closeModal.on("click", function(){
    modalWindow.removeClass("modal__window--show");
    $("body").css({
      "overflow-y": "scroll"
    });
  });
  modalOverlay.on("click", function(){
    modalWindow.removeClass("modal__window--show");
    $("body").css({
      "overflow-y": "scroll"
    });
  });
});