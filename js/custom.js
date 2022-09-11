$(function () {
  "use strict";

  var wind = $(window);

  var main_height = $(".main-height").outerHeight();

  $(".sub-height").outerHeight(main_height);

  // scrollIt
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -60, // offste (in px) for fixed top navigation
  });

  // navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default");

    if (bodyScroll > 300) {
      navbar.addClass("nav-scroll");
    } else {
      navbar.removeClass("nav-scroll");
    }
  });

  // navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default"),
      logo = $(".navbar .logo> img");

    if (bodyScroll > 300) {
      navbar.addClass("nav-scroll");
      logo.attr("src", "img/logo-dark.png");
    } else {
      navbar.removeClass("nav-scroll");
      logo.attr("src", "img/logoLight.png");
    }
  });

  // button scroll to top
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      button_top = $(".button-top");

    if (bodyScroll > 700) {
      button_top.addClass("button-show");
    } else {
      button_top.removeClass("button-show");
    }
  });

  // stellar
  wind.stellar();

  // typejs
  $(".header .caption h3").typed({
    strings: [
      "Website Development Service",
      "SEO",
      "SMO",
      "UI/UX Designer",
      "Entrepreneur",
      "Computer Sales Service",
      "Printer Repair Service",
    ],
    loop: true,
    startDelay: 1000,
    backDelay: 1000,
    typeSpeed: 30,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  });

  // counterUp
  $(".numbers .counter").countUp({
    delay: 100,
    time: 1500,
  });

  // Tabs
  $(".tabs-icon").on("click", "li", function () {
    var myID = $(this).attr("id");

    $(this).addClass("active").siblings().removeClass("active");

    $(".tabs .item").hide();

    $("#" + myID + "-content").fadeIn();
  });

  // progress bar
  wind.on("scroll", function () {
    $(".skills-progress span").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr("data-value");
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });

  // owlCarousel
  $(".clients .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500,
  });

  // magnificPopup
  $(".portfolio .link").magnificPopup({
    delegate: "a",
    type: "image",
  });
});

$(window).on("load", function () {



  // Preloader
  $(".loading").fadeOut(500);

  // isotope
  $(".gallery").isotope({
    // options
    itemSelector: ".items",
  });

  var $gallery = $(".gallery").isotope({
    // options
  });

  // filter items on button click
  $(".filtering").on("click", "span", function () {
    var filterValue = $(this).attr("data-filter");

    $gallery.isotope({ filter: filterValue });
  });

  $(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // contact form
  $("#contact-form").validator();

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#form_name").value;
    let email = document.querySelector("#form_email").value;
    let subject = document.querySelector("#form_subject").value;
    let msg = document.querySelector("#form_message").value;
    sendEmail(name, email, subject, msg);
    $("#contact-form")[0].reset();
  });
});

function sendEmail(name, email, subject, msg) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ajinkyashewale.personal@gmail.com",
    Password: "kdzdvtbugewvsgtq",
    To: "ajinkyashewale29@gmail.com",
    From: "ajinkyashewale.personal@gmail.com",
    Subject: `${name} sent you a message with subject ${subject}`,
    Body: `Name: ${name} <br/>Email: ${email}<br/>Subject: ${subject} <br/>Message: ${msg}`
  }).then((msg) => $("#form-submit").attr({ "value": "Thank You ! We will get you Soon...", "disabled": "disabled" }))
}
