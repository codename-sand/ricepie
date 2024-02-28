$(function(){
	
	/* step2 display */	
	$('.box').click(function(){
		$('.box').removeClass('box_active');
		$(this).addClass('box_active');
		$('.step2').css('display','block');
		$('.cart_fix').css('display','block');
		$('.step2 .bx-viewport').css('height','620px');
		$('.step2 .bx-viewport ul').css('transform','translate3d(-1180px, 0px, 0px');
		$('.step2 .bx-viewport ul li').css('width','1180px');
		$('.step_1').addClass('selected');
	})

	/* step3 display */	
	$('.rice_content ul li a').click(function(){
		$(this).addClass('card_active');
		$('.step3').css('display','block');
		$('.step_2').addClass('selected');
		return false;
	})

	/* step4 display */	
	$('.sticker-box').click(function(){
		$('.sticker-box images').removeClass('sticker_active');
		$('images',this).addClass('sticker_active');
		$('.step4').css('display','block');
		$('.step_3').addClass('selected');
		return false;
	})
	$('.msg_text').click(function(){
		$('.step4').css('display','block');
		$('.step_3').addClass('selected');
	})

	/* order_list display */	
	$('.quantity1').click(function(){
		$('.order_list').css('display','block');
		$('.step_4').addClass('selected');
		return false;
	})

	/* cart */	
	$('.cart_btn').toggle(function(){
		$('.cart_fix').animate({'bottom':'-230px'}, 300);
		$('images',this).attr('src',$('.cart_btn images').attr('src').replace('down.png','up.png'));
	},function(){
		$('.cart_fix').animate({'bottom':'0px'}, 300);
		$('images',this).attr('src',$('.cart_btn images').attr('src').replace('up.png','down.png'));
	});

	/* 떡 고르기 tab */	
	$('.rice_tab_btn > li').click(function(){
		var i = $(this).index();
		$('.rice_tab_btn > li').removeClass('active');
		$(this).addClass('active');
		$('.rice_content').css('z-index','9');
		$('.rice_content').eq(i).css('z-index','10');
	})

	/* 스티커 샘플 tab */	
	$('.msg_tab_btn > li').click(function(){
		var i = $(this).index();
		$('.msg_tab_btn > li').removeClass('active');
		$(this).addClass('active');
		$('.msg_content').css('display','none');
		$('.msg_content').eq(i).css('display','block');
	})
	
});








