$(document).ready(function () {
  console.log("ok");
  $(".csr-contact-email").mouseover(function () {
    $(this).parent().parent().find(".csr-contact-image-wrapper").addClass("hovered");
  });
  $(".csr-contact-email").mouseout(function () {
    $(this).parent().parent().find(".csr-contact-image-wrapper").removeClass("hovered");
  });

  // SCROLL STUFF
  const sections = [...document.querySelectorAll(".scroll-item")];

  let options = {
    rootMargin: "0px",
    threshold: 0.05,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const { target } = entry;
      console.log(entry, target);

      if (entry.intersectionRatio >= 0.05) {
        target.classList.add("is-visible");
      } else {
        // target.classList.remove("is-visible");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section, index) => {
    observer.observe(section);
  });

  //CLICK LEARN MORE
  $(".csr-card-button").click(function () {
    $(".card").removeClass("open");
    $(".card").removeClass("lower");
    $(this).parent().parent().addClass("open");
    $(".card:not(.open)").addClass("lower");

    $(".csr-intro-title, .csr-intro-description").addClass("go-up");

    // $('.csr-cards-wrapper').addClass('go-up');

    if ($(window).width() > 1024) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".csr-mid").offset().top - 100,
        },
        900
      );
    } else {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(this).parent().parent().offset().top - 30,
        },
        900
      );
    }
  });

  //   CLICK A PROJECT
  $(".csr-project").click(function () {
    $(".csr-project").removeClass("clicked");
    $(this).addClass("clicked");
    $(".csr-intro").addClass("has-left");
    // Get the data
    var getData = $(this).attr("data-tab");

    $(".project-page").addClass("hide");

    $(".project-page[data-tab='" + getData + "']").removeClass("hide");

    $(".csr-projects-section").addClass("has-left");
    // $(".csr-cards-wrapper").addClass("hide");

    $(".card").removeClass("open");
    $(".card").removeClass("lower");

    // if ($(window).width() > 1024) {
    //   $([document.documentElement, document.body]).animate(
    //     {
    //       scrollTop: $(".csr-projects-section").offset().top - 30,
    //     },
    //     900
    //   );
    // } else {
    // }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".csr-mid").offset().top - 30,
      },
      600
    );

    $(".return-button").removeClass("go-down");
  });

  //   CLICK RETURN
  $(".return-button").click(function () {
    $(".csr-intro").removeClass("has-left");
    $(".csr-projects-section").removeClass("has-left");
    $(".return-button").addClass("go-down");
    $(".csr-project").removeClass("clicked");
    $(".project-page").addClass("hide");
    // $(".csr-cards-wrapper").removeClass("hide");
    $(".csr-intro-title, .csr-intro-description").removeClass("go-up");

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".csr-mid").offset().top - 150,
      },
      600
    );
  });
});
