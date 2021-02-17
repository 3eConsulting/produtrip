
//*DOCUMENT READY*//
$(document).ready(function(){
	$('.subNav01').animate({top:'12px', height:'0px'},0, 'linear');

$(".nav02").hover(function () {
  $(this).addClass("act");
  $(this).find('.subNav01').css('display','block');
  $(this).find('.subNav01').stop().animate({top:'12px', height:'81px'}, 200, 'easeOutQuart');
},function () {
    $(this).removeClass("act");
    $(this).find('.subNav01').stop().animate({top:'18px', height:'0px'}, 200, 'easeOutQuart', function(){
      $(this).css('display','none');
    });
});


/*************************JP**/






/***************************/

$(".control ul li").click(function () {
  $(".control ul li").removeClass('on');
  var id = $(this).attr('class').replace('bullet-', '');
  $(this).addClass('on');
  $('.bg-highlight').stop().animate({opacity:'0'}, 400, 'linear');
  $('#highlight-'+id).stop().animate({opacity:'1'}, 400, 'linear');
});


  /*$('.class').click( function(){
    if ($(this).before().attr('id', 'nome ID')) {

    }else if ($(this).before().attr('id', 'nome ID')) {

    };
    
  })*/


//*DOCUMENT READY*//
});
//*DOCUMENT READY*//

$(".nav ul li").hover(function () {
  $(this).find('.dash').stop().animate({width:'60px'}, 200, 'easeOutQuart');
  $(this).find('img').stop().animate({opacity:1}, 200, 'easeOutQuart');
},function () {
  $(this).find('.dash').stop().animate({width:'0px'}, 200, 'easeOutQuart');
  $(this).find('img').stop().animate({opacity:0}, 200, 'easeOutQuart');
});


var imgAtual = 0;
var imgAnterior = 1;
var timer = window.setInterval(function(){
  if( imgAtual < 1 )
    imgAtual++;
  else
    imgAtual=0;

  if( imgAnterior < 1 )
    imgAnterior++;
  else
    imgAnterior=0;

  $(".imgBox img").eq(imgAnterior).fadeOut(800);
  $(".imgBox img").eq(imgAtual).fadeIn(800);
}, 10000);



//CALL LIGHTBOX/MODAL
$('.btnEnvia').on('click', function(e){
  $('.overlay').css('display','block');
  $('.overlay').stop().animate({opacity: 0.8});
   $('.content-modal').fadeIn(200, 'linear', function(){
      $('.btn-close').fadeIn(200);
   });
});


//CLOSE LIGHTBOX/MODAL 
$('.btn-close, .overlay').on('click', function(e){
  $(this).fadeOut(0);
  $('.content-modal').fadeOut(200);
  $('.overlay').stop().animate({opacity: 0}, 0, 'linear', function(){
    $(this).css('display','none');
  });
});










$(window).scroll(function() { 
  var scroll = $(window).scrollTop();

  if (scroll > 0) {
      $('.menu','.texmenu').addClass('.menu-auxiliar');
      $('.texmenu').addClass('.texmenuvai');
  } else {
      $('.menu').removeClass('.menu-auxiliar');
      $('.texmenu').removeClass('.texmenuvai');
  }
});