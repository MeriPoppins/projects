// popap

window.jq = $

var $form = $(".main-form__form");
var $popap = $(".modal-popap");
var $close = $(".modal-popap__close");
var $ovelay = $(".modal-overlay");
var $closeLicense = $(".modal-popap__close--license");
var $license1 = $(".modal-popap__license--items1");
var $license2 = $(".modal-popap__license--items2");
var $license3 = $(".modal-popap__license--items3");
var $license4 = $(".modal-popap__license--items4");
var $license5 = $(".modal-popap__license--items5");
var $licenseItem1 = $(".license__items--1");
var $licenseItem2 = $(".license__items--2");
var $licenseItem3 = $(".license__items--3");
var $licenseItem4 = $(".license__items--4");
var $licenseItem5 = $(".license__items--5");

$("#inputTel").mask("+7(999) 999-9999", {placeholder: " ", autoclear: false});

$form.on("submit", function(event) {
  event.preventDefault();
  $.post(
    'http://kad11.ru/email.php',
    $form.serialize()
    ).always( function(){
        $form.find('input').val('');
        $form.find('textarea').val('');
        $popap.addClass("modal-popap--show");
        $ovelay.addClass("modal-overlay--show");
      });
});

$close.on("click", function(event) {
  event.preventDefault();
  $popap.removeClass("modal-popap--show");
  $ovelay.removeClass("modal-overlay--show");
});

$ovelay.on("click", function(event) {
  $popap.removeClass("modal-popap--show");
  $ovelay.removeClass("modal-overlay--show");
  $license1.removeClass("modal-popap__license--items1-show");
  $license2.removeClass("modal-popap__license--items2-show");
  $license3.removeClass("modal-popap__license--items3-show");
  $license4.removeClass("modal-popap__license--items4-show");
  $license5.removeClass("modal-popap__license--items5-show");
});

// license

$licenseItem1.on("click", function(event){
  event.preventDefault();
  $license1.addClass("modal-popap__license--items1-show");
  $ovelay.addClass("modal-overlay--show");
});

$licenseItem2.on("click", function(event){
  event.preventDefault();
  $license2.addClass("modal-popap__license--items2-show");
  $ovelay.addClass("modal-overlay--show");
});

$licenseItem3.on("click", function(event){
  event.preventDefault();
  $license3.addClass("modal-popap__license--items3-show");
  $ovelay.addClass("modal-overlay--show");
});

$licenseItem4.on("click", function(event){
  event.preventDefault();
  $license4.addClass("modal-popap__license--items4-show");
  $ovelay.addClass("modal-overlay--show");
});

$licenseItem5.on("click", function(event){
  event.preventDefault();
  $license5.addClass("modal-popap__license--items5-show");
  $ovelay.addClass("modal-overlay--show");
});

$closeLicense.on("click", function(event){
  event.preventDefault();
  $license1.removeClass("modal-popap__license--items1-show");
  $license2.removeClass("modal-popap__license--items2-show");
  $license3.removeClass("modal-popap__license--items3-show");
  $license4.removeClass("modal-popap__license--items4-show");
  $license5.removeClass("modal-popap__license--items5-show");
  $ovelay.removeClass("modal-overlay--show");
});

// menu

var $link = 

$(document).ready(function() {
 var start_pos=$('#wrap').offset().top;
 $(window).scroll(function(){
   if ($(window).scrollTop()>=start_pos) {
       if ($('#wrap').hasClass()==false) $('#wrap').addClass('fix-navbar-top');
   }
   else $('#wrap').removeClass('fix-navbar-top');
 });
});


// license

$(document).ready(function(){
      $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        slideWidth: 300,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10
      });
    });