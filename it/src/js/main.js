//slider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    slideWidth: 1920,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0
  });
});

//popap
var $formFeedback = $(".popap__feedback");
var $formRequest = $(".popap__request");
var $openFeedback = $(".feedback");
var $openFormRequest = $(".request");
var $close = $(".button__close");
var $overlay = $(".overlay");

$openFeedback.on("click", function(event) {
  $formFeedback.addClass("popap__show");
  $overlay.addClass("overlay__show");
});

$openFormRequest.on("click", function(event) {
  $formRequest.addClass("popap__request--show");
  $overlay.addClass("overlay__show");
});

$close.on("click", function(event) {
  $formFeedback.removeClass("popap__show");
  $formRequest.removeClass("popap__request--show");
  $overlay.removeClass("overlay__show");
});

$overlay.on("click", function(event) {
  $formFeedback.removeClass("popap__show");
  $formRequest.removeClass("popap__request--show");
  $overlay.removeClass("overlay__show");
});

//price
$(function(){
  $('.tab-nav li:first').addClass('select');
  $('.tab-box .tab-panels>.price__item').css('opacity',0).filter(":first").css('opacity',1);
  $('.tab-nav a').click(function(){
    $('.tab-box .tab-panels>.price__item').animate({'opacity':0},200).filter(this.hash).animate({'opacity':1},200);
    $('.tab-nav li').removeClass('select');
    $(this).parent().addClass('select');        
    return (false);
  });  
});