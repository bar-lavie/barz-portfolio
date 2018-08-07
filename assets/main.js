$(document).ready(function() {
  /*=============================
========== Loader ========== 
=============================*/
  setTimeout(() => {
    $("#loader").fadeOut();
    $("body").css("overflow-y", "auto");
  }, 1000);

  /*=============================
========== Typed init ========== 
=============================*/

  setTimeout(() => {
    var typed = new Typed(".typed", {
      strings: [
        "<h1>Bar Zioni</h1><h2><span class='bolder'>Full Stack</span><br>Web Developer</h2>"
      ],
      typeSpeed: 30,
      onComplete: self => {
        $(".download").animate(
          {
            top: 0,
            opacity: 1
          },
          1000,
          "easeOutExpo"
        );
      }
    });
  }, 1500);

  /*=============================
========== Hamburger ========== 
=============================*/

  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    if ($(this).hasClass("is-active")) {
      $(".menu").animate(
        {
          right: 0
        },
        400,
        "easeOutExpo"
      );
      $("body").animate(
        {
          right: 100
        },
        400,
        "easeOutExpo"
      );
    } else {
      $(".menu").animate(
        {
          right: "-100%"
        },
        400,
        "easeOutExpo"
      );
      $("body").animate(
        {
          right: 0
        },
        400,
        "easeOutExpo"
      );
    }
  });

  /*=============================
========== Menu links ========== 
=============================*/

  $(".menu a").on("click", function(e) {
    $(".hamburger").toggleClass("is-active");

    $(".menu").animate(
      {
        right: "-100%"
      },
      400,
      "easeOutExpo"
    );
    $("body").animate(
      {
        right: 0
      },
      400,
      "easeOutExpo"
    );

    if ($(this.hash).length > 0) {
      // console.log($(this.hash).offset());
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top
        },
        600,
        "easeInOutCirc"
      );
    }
  });

  /*=============================
========== Slick ========== 
=============================*/
  $(".slick").slick({
    // nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    // prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left"></i></div>',
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});
