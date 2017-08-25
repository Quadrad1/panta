$(document).ready(function(){



  //Default Action
  $(".tab_content").hide(); //Hide all content
  $("ul.tabs li:first").addClass("active").show(); //Activate first tab
  $(".tab_content:first").show(); //Show first tab content
  
  //On Click Event
  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active content
    return false;
  });


  
  $(".toggle-nav").click(function(){
    $(this).toggleClass('open');
      $('.sidebar-nav').slideToggle();
  });


  $(".sidebar-nav li a").click(function(){
        $(this).parent().toggleClass('open');
          $(this).parent().prevAll().removeClass("open");
            $(this).parent().nextAll().removeClass("open");
    });

  $(".inicio .favourites").click(function(){
        $(this).parent().parent().toggleClass('active');
        $(this).toggleClass('active');
    });

  $(".category-items .favourites").click(function(){
        $(this).parent().parent().toggleClass('active');
        $(this).toggleClass('active');
    });

  $(".recomend .cataloge .favourites").click(function(){
        $(this).parent().parent().toggleClass('active');
        $(this).toggleClass('active');
    });

  $(".top-filter .show a").click(function(){
        $(this).toggleClass('active');
          $(this).prevAll().removeClass("active");
            $(this).nextAll().removeClass("active");
    });

/**
  $(".my-information ul li").click(function(){
        $(this).toggleClass('active');
        $(".hide").css("display","block").hide();
          $(".hide").show();
            $(this).prevAll().removeClass("active");
              $(this).nextAll().removeClass("active");


    });
**/

  $('.my-information ul li .title').click(function() {
    $(this).parent().toggleClass('active');
    if ( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6) {
      if ($('.hide').css("display")=="block") {$('.hide').css("display", "none");
        } else {$('.hide').css("display", "block");
                }
        } else {$('.hide').toggle("slow");
                }
  });




  $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
  $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });

   function fixEvent(e) {
    e = e || window.event;
    if(!e.target) e.target = e.srcElement;
    return e;
  }

  function closePopup(e, popup) {
      var container = $(popup);
      if (container.has(e.target).length === 0){
           container.hide();
      }
    }

    $(document).mouseup(function (e) {
      e = fixEvent(e);
      closePopup(e, ".lightbox1,.lightbox2,.lightbox3,.lightbox4,.lightbox5,.lightbox6,.lightbox7");
  });

    $(".buttons .delivery").click(function(){
      $(".lightbox6").fadeIn();
    });

    $(".pop-up2").click(function(){
      $(".lightbox2").fadeIn();
    });

    $(".sidebar-nav li .first").click(function(){
      $(".lightbox1").fadeIn();
    });

    $(".sidebar-left .login .enter").click(function(){
      $(".lightbox3").fadeIn();
    });

    $(".pop-up5").click(function(){
      $(".lightbox5").fadeIn();
    });

    $(".lightbox3 .pass").click(function(){
      $(".lightbox3").fadeOut();
        $(".lightbox4").fadeIn();
    });

    $(".my-cabinet .my-cabinet-tabs .my-information form .change-pswd").click(function(){
        $(".lightbox7").fadeIn();
    });

    $(".lightbox7 .change-pswd").click(function(){
        $(".lightbox7").fadeOut();
          $(".lightbox4").fadeIn();
    });

    $(".lightbox4 .back").click(function(){
        $(".lightbox4").fadeOut();
          $(".lightbox3").fadeIn();
    });

    $(".change-currency .drop").click(function(){
      $(".change-currency .drop-down").slideToggle();
    });

    $(".drop-down li a").click(function(){
      $(".change-currency .drop-down").slideToggle();
    });

    $(".go-up").click(function(){
      var href = $(this).attr("href");
     $("html, body").animate({scrollTop : $(href).offset().top - 0}, 1500);
     return false;
  });






      $(".lightbox-close").click(function(){
      $(".lightbox1,.lightbox2,.lightbox3,.lightbox4,.lightbox5,.lightbox6,.lightbox7").fadeOut();
    });


 

  


















$('.intro-left').flexslider({
    animation: "fade",
    animationSpeed: 500,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 3000,
  });

  $('.intro-right').flexslider({
    animation: "fade",
    animationSpeed: 500,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 5000,
  });

  $('.producers-carousel').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 84,
        itemMargin: 5,
        pausePlay: false,
        slideshow: true,
        slideshowSpeed: 5000,
      });

  $('.items-slide').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

  $('.sel-new').styler({
        selectSearch: true
      });



});

