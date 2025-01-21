// JavaScript Document
$(function () {
  /*** 上に戻るボタン ***/
  let topBtn = $('#scroll-top');
  topBtn.hide();

  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });

  topBtn.click(function (event) {
    event.preventDefault();  // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
      scrollTop: 0
    }, 500);
  });

  /*** ナビゲーションメニュー ***/
  $('.close-button, .open-button').click(function () {
    $('.header nav').slideToggle();
  });

  /*** スライダー（slick）1つずつ見せる ***/
  $('#slick-slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true,
    arrows: false
  });
  
  
  
    /*** スライダー（slick）1つずつ見せる ***/
  $('#section-top__image-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
    arrows: false
  });

  
  /*** スライダー（slick）３つずつ見せる ***/
  $('#section-instructor').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});
});
