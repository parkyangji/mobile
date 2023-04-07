var op = false; 
 	
$(".gnb_btn").click(function() { 
    
   if(op==false){
     $("#gnb").animate({right:0,opacity:1}, 'fast');
     $('#headerArea').addClass('mn_open');
     op=true;
   }else{
     $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
     $('#headerArea').removeClass('mn_open');
     op=false;
   }

});


$(".depth1 h3 a").click(function(e) {
  e.preventDefault();
  $(".depth1").find('ul').hide();
  $(".depth1 h3 a").css('color', '#333');
  $(this).css('color', '#1f296f');
  $(this).parent().next().fadeIn();
})


  
var smh=$('.main').height()-$('#headerArea').height();  

 $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();  

        if(scroll>smh){
            $('.topMove').fadeIn('slow');
           
        }else{
            $('.topMove').fadeOut('fast');
        }; 
        
});


function family_open() {
  $('.f_family .open').addClass('on');
  $('.f_family ul').slideDown('200');
}

function family_close() {
  $('.f_family .open').removeClass('on');
  $('.f_family ul').slideUp('200');
}

$('.f_family .open').toggle(family_open, family_close);


$('.topMove').click(function(e){
    e.preventDefault(); 
    $("html,body").stop().animate({"scrollTop":0},1000);
});



$('.subNav>a').toggle(function(e){
    e.preventDefault();
    $(this).next('ul').stop().slideDown('fast');
    $(this).parents('.subNav').addClass('on');

}, function(e){
    e.preventDefault();
    $(this).next('ul').stop().slideUp('fast');
    $(this).parents('.subNav').removeClass('on');
});


