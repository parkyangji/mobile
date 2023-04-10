var history1 = $('.cont').eq(0).offset().top-120;
var history2 = $('.cont').eq(1).offset().top-120;
var history3 = $('.cont').eq(2).offset().top-120;
var history4 = $('.cont').eq(3).offset().top-120;


var navTop = $('.history_list').offset().top;

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();


    if(navTop-300<scroll){ 
      $('.history_list').addClass('fixed');
      $('#history1').css('margin-top', '90px');
    }  else {
      $('.history_list').removeClass('fixed');
      $('#history1').css('margin-top', '0');
    }


    $('.history_list ul li a').removeClass('li_current');

    if (scroll>=history1 && scroll<history2) {
      $('.history_list ul li a').eq(0).addClass('li_current');
      $('.history_list ul').animate({left:0},'fast').clearQueue();

    } else if (scroll>=history2 && scroll<history3) {
      $('.history_list ul li a').eq(1).addClass('li_current');
      $('.history_list ul').animate({left:-200},'fast').clearQueue();

    } else if (scroll>=history3 && scroll<history4) {
      $('.history_list ul li a').eq(2).addClass('li_current');
      $('.history_list ul').animate({left:-400},'fast').clearQueue();

    } else if (scroll>=history4) {
      $('.history_list ul li a').eq(3).addClass('li_current');
      $('.history_list ul').animate({left:-600},'fast').clearQueue();

    } else if (scroll<history1) {
      $('.history_list ul li a').eq(0).addClass('li_current');
      $('.history_list ul').animate({left:0},'fast').clearQueue();
    }

})

