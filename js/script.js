$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
  });
});

$(".open").click(function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  } else {
    trigger.addClass("faq-o");
  }

  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  } else {
    container.addClass("expanded");
  }
});

var clickDelay = 500,
  clickDelayTimer = null;

$(".burger-click-region").on("click", function () {
  if (clickDelayTimer === null) {
    var $burger = $(this);
    $burger.toggleClass("active");
    $burger.parent().toggleClass("is-open");

    if (!$burger.hasClass("active")) {
      $burger.addClass("closing");
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass("closing");
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});

$(document).ready(function () {
  $(".merch-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  });
});

$(document).ready(function(event){
  $('.artur-header').click(function(event){
    $('.artur-text').toggleClass('creator-active');
    $('.artur-header i').toggleClass('creator-rotate');
  })
   $('.murat-header').click(function(event){
    $('.murat-text').toggleClass('creator-active');
    $('.murat-header i').toggleClass('creator-rotate');
  })
   $('.team-one').click(function(event){
    $('.text-one').toggleClass('team-active');
    $('.team-one i').toggleClass('team-rotate');
  })
   $('.team-two').click(function(event){
    $('.text-two').toggleClass('team-active');
    $('.team-two i').toggleClass('team-rotate');
  })
   $('.team-three').click(function(event){
    $('.text-three').toggleClass('team-active');
    $('.team-three i').toggleClass('team-rotate');
  })
   $('.team-footh').click(function(event){
    $('.text-footh').toggleClass('team-active');
    $('.team-footh i').toggleClass('team-rotate');
  })
});

