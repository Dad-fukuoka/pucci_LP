"use strict";
let count = 0;
const countUp = () =>{
    // console.log(count++);
    let resCount = 30 + Math.floor( Math.random() * 61 );　//30以上91以下の整数
    $('#OSUapplyCounter').html(resCount)
}
const intervalId = setInterval(() =>{
countUp();
if(count > 5){ //関数を停止する回数
// clearInterval(intervalId); // 停止する関数を指定
}}, 10000); //10秒ごとに実行
countUp(); // 初回実行

$(function () {
    $("a img").hover(function () {
        $(this).fadeTo(100, .8)
    }, function () {
        $(this).fadeTo(100, 1)
    }),
    $("a.opacity").hover(function () {
        $(this).fadeTo(100, .8)
    }, function () {
        $(this).fadeTo(100, 1)
    })
}),
$(function () {
    $(".nav-toggle").click(function () {
        $(this).toggleClass("opened"),
        $("#gnav").toggleClass("active")
    }),
    $("#gnav ul.navi li a").click(function () {
        $(".nav-toggle").toggleClass("opened"),
        $("#gnav").toggleClass("active")
    })
}),

$(function () {
    $(".sec-before_method .slider").slick({
        infinite: !0,
        dots: 1,
        arrows: !0,
        slidesToShow: 3,
        autoplay: false,
        speed: 700,
        // cssEase: "linear",
        prevArrow: '<div class="btn-prev"></div>',
        nextArrow: '<div class="btn-next"></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {}
            }
        ]
    }),
    $(".sec-reason05.voice .slider01").slick({
        infinite: !0,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoplay: false,
        centerMode: !0,
        centerPadding: "200px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "23%"
                }
            }
        ]
    }),
    $(".sec-reason05 .slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !1,
        slidesToShow: 1,
        autoplay: !1,
        centerMode: !0,
        centerPadding: "285px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "27%"
                }
            }
        ]
    }),
    $(".sec-machine .slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !1,
        slidesToShow: 1,
        autoplay: !1,
        centerMode: !0,
        centerPadding: "285px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "27%"
                }
            }
        ]
    }),
    $(".sec-voice .slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !1,
        slidesToShow: 1,
        autoplay: !1,
        centerMode: !0,
        centerPadding: "50px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "7%"
                }
            }
        ]
    }),
    $(".sec-voice .slider02").slick({
        infinite: !0,
        dots: !1,
        arrows: !1,
        slidesToShow: 1,
        autoplay: !1,
        centerMode: !0,
        centerPadding: "285px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "27%"
                }
            }
        ]
    }),
        $(".se .slider").slick({
        infinite: !0,
        dots: 1,
        arrows: !0,
        slidesToShow: 1,
        autoplay: !1,
        centerMode: !0,
        centerPadding: "285px",
        prevArrow: '<div class="btn-prev"></div>',
        nextArrow: '<div class="btn-next"></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {}
            }
        ]
    })
}),

$(document).ready(function () {
    $(".sec-point01 #tab-point li a").click(function (e) {
        e.preventDefault(),
        $(this).parent().addClass("active"),
        $(this)
            .parent()
            .siblings()
            .removeClass("active");
        e = $(this).attr("href");
        $(".sec-point01 .box").not(e).css("display", "none"),
        $(e).fadeIn()
    })
}),

$(function () {
    $(".sec-qa .q").click(function () {
        $($(this).next(".a")).animate({
            height: "toggle",
            opacity: "toggle"
        }, "nomal"),
        $(this).toggleClass("active")
    })
});

//iphone5表示崩れ対策（最小幅指定）
var ua = navigator.userAgent
var sp = (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
if (sp) new ViewportExtra(375)

// スライダー
$(function() {
    $('.slider_tuika').slick({
        dots: true, //下の丸ぽっち（インジケーター）を表示 
        autoplay: true, //自動再生 
        autoplaySpeed: 5000, //自動再生の速度 
        prevArrow: '<img decoding="async" loading="lazy" src="img/arrow_left.webp" class="slide-arrow prev-arrow tuika_left">',
        nextArrow: '<img decoding="async" loading="lazy" src="img/arrow_right.png" class="slide-arrow next-arrow tuika_right">',
    });
});

// フローティングボタン
$(function (){
    $('#goTop').hide(); //最初は隠しておく。CSSで隠してもオッケー
   $(window).on("scroll", function () {
         let topBtn = $('#goTop'); // ボタンを指定
         if( $(this).scrollTop() < 1000 ){//スクロールした高さが０から1000pxまでの高さ
             topBtn.fadeOut();
         }else{
             if($(this).scrollTop() < $(".f_last").offset().top){//スクロールした高さが０から.s12までの高さ
                 topBtn.fadeIn();
             }else{
                 topBtn.fadeOut();
             }
         }
   });
 });

//  PC電話発信無効化
 var ua = navigator.userAgent.toLowerCase();
 var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
 
 if (!isMobile) {
     $('a[href^="tel:"]').on('click', function(e) {
         e.preventDefault();
     });
 }

 $('.slider-magazine-wrap .slider.top').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り2.5えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 2.5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
  });

  $(".slider-magazine-wrap .slider.bottom").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 2.5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    rtl: true, // スライダーを左から右に流す（逆向き）
  });

//   スムーススクロール
  $(function(){
    $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    });

let swiper_shop = new Swiper(".swiper_shop", {
    loop: true, // ループ有効
    slidesPerView: 3, // 一度に表示する枚数
    speed: 3000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    spaceBetween: 20,
    autoplay: {
        delay: 0, // 途切れなくループ
    },
});



// ========== トップボタン非表示表示切り替え
window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.fv_btn_back');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});
