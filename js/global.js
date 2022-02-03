var swiper = new Swiper('.swiper-news', {
  speed: 1200,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 762,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.hero-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hero-nav'
});

$('.hero-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.hero-for',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 762,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$(function() {
  function ScrolClass() {
    if($(this).scrollTop() != 0) {
            $('.topPanel').addClass('topPanel-top');
          } else {
            $('.topPanel').removeClass('topPanel-top');
          }
    }
    $(window).scroll(function() {
      ScrolClass();
    });
    $(document).ready(function() {
      ScrolClass();
    });
});

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('.toTop').fadeIn();
    } else {
      $('.toTop').fadeOut();
    }
  });
  $('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});


$(".buttonDrop").click(function(){
    $("."+$(this).attr("data-class")).toggleClass("active");
    $(this).toggleClass("active");
  });

$('.rang-button').click(function(){
	$('.rang-button').removeClass('active');
	$(this).addClass('active');
	$('.rangBlock').removeClass('active');
	$('#'+$(this).attr('data-tab')).addClass('active');
})

var res = $(".dropDown-menu");
$('[data-class^="m"]').on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.menu-a').length) return;
  res.fadeOut(100);
});
function funk(){
  $(this).toggleClass("show");
  var link = $(this).attr('data-class'),
      el = $('.dropDown-menu.'+link);
  if(el.css("display") == "none"){
    res.hide();
    el.slideToggle(400);
  }
  else{
    el.slideToggle(400);
  }
}

$(document).ready(function() { 
  var overlay = $('#overlay'); 
  var open_modal = $('.open_modal'); 
  var close = $('.modal_close, #overlay'); 
  var modal = $('.modal_div'); 
   open_modal.click( function(event){ 
       event.preventDefault(); 
       var div = $(this).attr('href'); 
       overlay.fadeIn(400, 
           function(){ 
               $(div) 
                   .css('display', 'block') 
                   .animate({opacity: 1, top: '20%'}, 200); 
       });
   });

   close.click( function(){ 
          modal 
           .animate({opacity: 0, top: '15%'}, 200, 
               function(){ 
                   $(this).css('display', 'none');
                   overlay.fadeOut(400); 
               }
           );
   });
});
