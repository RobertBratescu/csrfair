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
          scrollTop: $(".csr-mid").offset().top - 60,
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
    $(".csr-intro").addClass("has-left hide");
    // Get the data
    var getData = $(this).attr("data-tab");

    $(".project-page").addClass("hide");

    $(".project-page[data-tab='" + getData + "']").removeClass("hide");

    $(".csr-projects-section").addClass("has-left");
    // $(".csr-cards-wrapper").addClass("hide");

    // $(".card").removeClass("open");
    // $(".card").removeClass("lower");

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

  //HOVER A PROJECT
  $(".csr-project").mouseover(function () {
    $(this).siblings().addClass("filtered");
  });
  $(".csr-project").mouseout(function () {
    $(".csr-project").removeClass("filtered");
  });

  //   CLICK RETURN
  $(".return-button").click(function () {
    $(".csr-intro").removeClass("has-left hide");
    $(".csr-projects-section").removeClass("has-left");
    $(".return-button").addClass("go-down");
    $(".csr-project").removeClass("clicked");
    $(".project-page").addClass("hide");
    // $(".csr-cards-wrapper").removeClass("hide");
    // $(".csr-intro-title, .csr-intro-description").removeClass("go-up");
    if ($(window).width() > 1024) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".csr-mid").offset().top - 150,
        },
        600
      );
    } else {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".card.open").offset().top - 50,
        },
        600
      );
    }
  });

  //PROJECT PAGE TITLE
  $(".project-page-title").each(function () {
    var getData = $(this).parent().parent().attr("data-tab");
    var getProjectName = $(".csr-project[data-tab='" + getData + "'] .project-title-text").html();
    $(this).html(getProjectName);
  });

  //OPEN DESCRIPTION IMAGES
  $(".description-wrapper img.stat").click(function () {
    var getSrc = $(this).attr("src");
    window.open(getSrc, "_blank").focus();
  });

  //STICKY JOIN BUTTON
  //   var stickyTop = $(".sticky").offset().top;

  //   $(window).scroll(function () {
  //     var windowTop = $(window).scrollTop();
  //     if (stickyTop < windowTop && $(".blue").height() + $(".blue").offset().top - $(".sticky").height() > windowTop) {
  //       $(".sticky").css("position", "fixed");
  //     } else {
  //       $(".sticky").css("position", "relative");
  //     }
  //   });
});
