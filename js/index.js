// コンテンツの高さ
function setHeight(){
	var $item = $(".item:not(.h_2,.message)");
	var $itemH2 = $(".item.h_2:not(.message)"); 
	$item.css("height",$(".item:not(.message)").outerWidth());
	$itemH2.css("height",$(".item:not(.message)").outerWidth()*2);
}
//メッセージの高さを指定
function setHeightMessage() {
	$(".message").each(function() {
		var messageHeight = $(this).height();
		$(this).css("height",messageHeight);
	});
}

// フォントサイズ
function adjustFontSize() {
	$(".fittext28").fitText(1.8,{minFontSize: '20px', maxFontSize: '28px'});
	$(".fittext13_w1").fitText(4.0,{minFontSize: '13px', maxFontSize: '13px'});
	$(".fittext13_w2").fitText(2.1,{minFontSize: '13px', maxFontSize: '13px'});
	$(".fittext12").fitText(2.1,{minFontSize: '12px', maxFontSize: '12px'});
}

$(document).ready(function(){
	adjustFontSize();
	setHeight();
	//hideAmazon(".amazonFilter");
	//setHeightMessage();
	imgHeightMargin();
	$(".item").hover(
	function() {
		console.log(this);
		$(this).find(".amazonFilter").fadeIn();
	},
	function(){
		console.log(this);
		$(this).find(".amazonFilter").fadeOut();
	}
	);
});
//
$(window).resize(function(){
	setHeight();
	//setHeightMessage();
});

//縦位置中央
function imgHeightMargin() {
	$(".item img").bind("load",function() {
		$(this).each(function() {
			var imgHeight=$(this).height();
			var itemHeight=$(".item").outerHeight();
			if(0<itemHeight-imgHeight) {
				$(this).css({marginTop:(itemHeight-imgHeight)/2+"px"});
			}
		})
	});
}

//スクロールでTOPへ
$(document).ready(function() {
  var pagetop = $('.pagetop');
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});

//
$(function(){
	$(window).on('load resize',function(){
		$width = $(window).width();
		if ( $width < 983){
			var colBoxWidth = '80%';
			var colBoxHeight = '85%'
		} else{
			var colBoxWidth = '50%';
			var colBoxHeight = '70%'
		}
		$('a.form').colorbox({
			transition: "fade",
			iframe:true,
			width:colBoxWidth,
			height:colBoxHeight
		});
	});
	
	//ぶるぶる
	$('a.form').jrumble({
		speed:60,
		x:1,
		y:1,
	});
	$('a.form').trigger('startRumble');
});
$(window).on('load',function(){  
	$('#container').masonry({
		itemSelector: '.item'
	});  
});
