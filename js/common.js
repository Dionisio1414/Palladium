$(function() {

  new WOW().init();

	$(".slider-home").slick({
		infinite: true,
		slidesToShow: 1,
		variableWidth: true,
		prevArrow: "<img class='controls-prev' src='img/arrow-prev.png'>",
		nextArrow: "<img class='controls-next' src='img/arrow-next.png'>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: false
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
      {
      breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
	});

  $(".slider-cards").slick({
    infinite: true,
    slidesToShow: 1
  });

	$(".slider-soon").slick({
		infinite: true,
		slidesToShow: 4,
		prevArrow: "<img class='controls-prev' src='img/arrow-prev.png'>",
		nextArrow: "<img class='controls-next' src='img/arrow-next.png'>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          variableWidth: false
        }
      },
      {
      breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
      breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
	});

 /*   $(".slider-soon-wrapper .slider-soon").slick({
    infinite: true,
    slidesToShow: 4,
    prevArrow: "<img class='controls-prev' src='img/arrow-prev.png'>",
    nextArrow: "<img class='controls-next' src='img/arrow-next.png'>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          variableWidth: false
        }
      },
      {
      breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
      breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });*/

  $(".dates-silder").slick({
    infinite: true,
    slidesToShow: 12,
    nextArrow: "<img class='controls-next' src='img/arrow-next.png'>",
    prevArrow: "<img class='controls-prev' src='img/arrow-prev.png'>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          variableWidth: false
        }
      },
      {
      breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
      breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });

  var alldays = $(".date");



	$(".hamburger").click(function() {
		$(this).toggleClass("is-active");
		if($(".popup-menu").data("style") == "hidden") {
			$(".popup-right-menu").addClass("slideInRight");
      $(".popup-menu").fadeIn();
			$(".popup-menu").data("style", "visible");/*
      $("body").addClass("noscroll");*/
		}
		else {
			$(".popup-menu").fadeOut();
			$(".popup-menu").data("style", "hidden");/*
      $("body").removeClass("noscroll");*/
		}
	
	});

  $(".anouncments-slider").slick({
    infinite: true,
    slidesToShow: 4,
  });

  $(".current-film").click(function() {
    var currentTrailer = $(this).parent().find("video");
    if(currentTrailer.get(0).paused) {
      currentTrailer.get(0).play();
      $(this).hide();
    }
  });

  $("video").click(function() {
    var playedTrailer = $(this);
      if($(this).get(0).played) {
        playedTrailer.get(0).pause();
        $(this).parent().find(".current-film").show();
      }
  });

  $(".seat-place").click(function() {
    var th = $(this),
        seatsInRow = th.parent().find(".seat-place"),
        numberOfClicked = seatsInRow.index(this) + 1;
        
        th.toggleClass("chosen"); 
        
        if(!$(this).find(".seat-number").length > 0) {
          $(this).append("<span class='seat-number'>" + numberOfClicked + "</span>");
        }
        else {
         $(this).find(".seat-number").remove();
        }
        
        if($(this).hasClass("bought")) {
          $(this).removeClass("chosen");
          $(this).find(".seat-number").remove();
        }

  });

  $('.custom').selectpicker({
    style: 'btn-info',
    size: 10
  });

  $('.custom-second').selectpicker({
    style: 'btn-info',
    size: 3
  });

  $('.film-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
    
  });

  $(".button-filled").magnificPopup({
    type: 'inline',
    preloader: true,
    focus: '#username',
    modal: true,
    closeOnBgClick: true
  });

$(document).on('click', '.close-director-popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $(".dropdown-toggle").click(function() {
    $(this).parent().find(".dropdown-menu").slideToggle();
  });

  $("#director-form-phone").mask("rq we00t 000 00 00", {
    translation: {
      "r": {
        pattern: /[0-9]/,
        fallback: "3"
      },
      "q": {
        pattern: /[0-9]/,
        fallback: "8"
      },
      "w": {
        pattern: /[0-9]/,
        fallback: "("
      },
      "e": {
        pattern: /[0-9]/,
        fallback: "0"
      },
      "t": {
        pattern: /[0-9]/,
        fallback: ")"
      }
    }
  });

  $("#send").click(function() {
    $(".popup").show();
  });

  $(".close").click(function() {
    $(".popup").hide();
  });

  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

    $(".tab_item-account").not(":first").hide();
  $(".wrapper-account .tab-account").click(function() {
    $(".wrapper-account .tab-account").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item-account").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

   $('.scheme-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
    // Slider vimeo on PAGE NEWS
    
    $('.wrapper-to-slider > div.slider-vimeo').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
//		variableWidth: true,
        nextArrow: "<img class='controls-next' src='img/arrow-next.png'>",
        prevArrow: "<img class='controls-prev' src='img/arrow-prev.png'>"
    });
    
     $('.wrapper-to-slider > div.slider-vimeo').on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('.wrapper-to-slider .current-item-slider>span.current-slide').html(currentSlide+1);
    });

    $("#tg-aside").hover(function() {
      $(this).attr("src", "img/telegram-hover.png");
    });

     $("#tg-aside").mouseout(function() {
      $(this).attr("src", "img/telegram-icon.png");
    });

     $("#inst-aside").hover(function() {
      $(this).attr("src", "img/instagram-hover.png");
    });

     $("#inst-aside").mouseout(function() {
      $(this).attr("src", "img/instagram-icon.png");
    }); 

     $("#fb-aside").hover(function() {
      $(this).attr("src", "img/facebook-hover.png");
    });

     $("#fb-aside").mouseout(function() {
      $(this).attr("src", "img/facebook-icon.png");
    });  

     $("#apple-aside").hover(function() {
      $(this).attr("src", "img/apple-hover.png");
    });

     $("#apple-aside").mouseout(function() {
      $(this).attr("src", "img/apple-icon.png");
    });  
 
     $("#android-aside").hover(function() {
      $(this).attr("src", "img/android-hover.png");
    });

     $("#android-aside").mouseout(function() {
      $(this).attr("src", "img/android-icon.png");
    }); 

    $("#tg-footer").hover(function() {
      $(this).attr("src", "img/tg-footer-hover.png");
    });

     $("#tg-footer").mouseout(function() {
      $(this).attr("src", "img/tg-footer.png");
    });  

     $("#fb-footer").hover(function() {
      $(this).attr("src", "img/fb-footer-hover.png");
    });

     $("#fb-footer").mouseout(function() {
      $(this).attr("src", "img/fb-footer.png");
    });  

    $("#vb-footer").hover(function() {
      $(this).attr("src", "img/vb-footer-hover.png");
    });

     $("#vb-footer").mouseout(function() {
      $(this).attr("src", "img/vb-footer.png");
    });    

     $(".play-button img").hover(function() {
      $(this).attr("src", "img/play-hover.png");
    });

     $(".play-button img").mouseout(function() {
      $(this).attr("src", "img/play-icon.png");
    });  


     $(".play-button img").hover(function() {
      $(this).attr("src", "img/play-hover.png");
    });

     $(".play-button img").mouseout(function() {
      $(this).attr("src", "img/play-icon.png");
    });  

    $(".actions-link").hover(function() {
      $(this).find("img").attr("src", "img/actions-arrow-hover.png");
    });


   $(".button-empty").hover(function() {
      $(this).find("img").attr("src", "img/footer-arrow-hover.png");
    });

     $(".button-empty").mouseout(function() {
      $(this).find("img").attr("src", "img/footer-arrow.png");
    });   
	
	var $btn_shedule = $('.see-shedule .resp-btn');
	$(window).resize(function() {
		if($(window).width() < 1024) {
			$btn_shedule.html('Все акции' + '<img src="img/footer-arrow.png" alt="">');
		} else if($(window).width() > 1024) {
			$btn_shedule.html('Вернуться в акции' + '<img src="img/footer-arrow.png" alt="">');
		}
	});
});
