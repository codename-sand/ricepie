$(function(){
	$('.top_banner_slide').bxSlider({
		speed: 500,
		pause: 3000,
		auto: true,
		moveSlides: 1,
		minSlides: 1,
		maxSlides: 1,
		autoHover: false,
		pager: false,
		controls: true,
	})

	$('.footer_banner_slide').bxSlider({
		speed: 500,
		pause: 3000,
		auto: true,
		moveSlides: 4,
		minSlides: 4,
		maxSlides: 4,
		slideWidth: 205,
		slideMargin: 60,
		autoHover: false,
		pager: false,
		controls: true,
	})

	$('.top_button').click(function() {
        $('body,html').animate({scrollTop: 0}, 400);
    });


	// chatting
	$('.chat_content').show(); 

	$('.chat_title').toggle(function(){
    $('.chat_content').slideUp();
    $('.chat_title images').attr('src',$('.chat_title images').attr('src').replace('chat_arrow.png','chat_close.png'));
  },function(){
    $('.chat_content').slideDown();
    $('.chat_title images').attr('src',$('.chat_title images').attr('src').replace('chat_close.png','chat_arrow.png'));
  })

	// quickMenu
	var defaultTop=parseInt($(".side_contents").css("top"));
  	$(window).on("scroll",function(){
    var scv=$(window).scrollTop();
    // $(".side_contents").stop().animate({top:scv+defaultTop+"px"},1000);
  });
});
