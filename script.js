$(document).ready(function () {
  console.log("ok");
  $(".csr-contact-email").mouseover(function () {
    $(this).parent().parent().find(".csr-contact-image-wrapper").addClass("hovered");
  });
  $(".csr-contact-email").mouseout(function () {
    $(this).parent().parent().find(".csr-contact-image-wrapper").removeClass("hovered");
  });
});

$(".mouse").click(function () {
  console.log("clicked");
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#csr-mid").offset().top - 80,
    },
    800
  );
});
